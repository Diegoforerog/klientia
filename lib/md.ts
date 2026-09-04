// Conversor mínimo de Markdown → HTML para el contenido del blog (propio y confiable).
// Soporta: h2/h3, párrafos, **negrita**, [enlaces](url), listas (- / 1.). Sin dependencias externas.

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inline(t: string): string {
  let s = esc(t);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[(.+?)\]\((.+?)\)/g, (_m, text, url) => {
    const safe = /^https?:\/\//i.test(url) || url.startsWith('/');
    const attrs = /^https?:\/\//i.test(url) ? ' target="_blank" rel="noopener"' : '';
    return safe ? `<a href="${esc(url)}"${attrs}>${text}</a>` : text;
  });
  return s;
}

export function mdToHtml(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let ul = false;
  let ol = false;
  const closeLists = () => {
    if (ul) {
      out.push('</ul>');
      ul = false;
    }
    if (ol) {
      out.push('</ol>');
      ol = false;
    }
  };
  for (const raw of lines) {
    const l = raw.trimEnd();
    if (!l.trim()) {
      closeLists();
      continue;
    }
    let m = l.match(/^(#{1,6})\s+(.*)$/);
    if (m) {
      closeLists();
      const lvl = Math.min(m[1].length, 6);
      out.push(`<h${lvl}>${inline(m[2])}</h${lvl}>`);
      continue;
    }
    m = l.match(/^\s*[-*]\s+(.*)$/);
    if (m) {
      if (!ul) {
        closeLists();
        out.push('<ul>');
        ul = true;
      }
      out.push(`<li>${inline(m[1])}</li>`);
      continue;
    }
    m = l.match(/^\s*\d+\.\s+(.*)$/);
    if (m) {
      if (!ol) {
        closeLists();
        out.push('<ol>');
        ol = true;
      }
      out.push(`<li>${inline(m[1])}</li>`);
      continue;
    }
    closeLists();
    out.push(`<p>${inline(l)}</p>`);
  }
  closeLists();
  return out.join('\n');
}
