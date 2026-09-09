import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Reembolsos',
  description:
    'Política de Reembolsos de Klientia: plazo de 14 días para suscripciones (mensuales o anuales), procesadas por Creem (nuestro Merchant of Record).',
  alternates: { canonical: '/legal/politica-de-reembolsos/' },
};

export default function PoliticaDeReembolsosPage() {
  return (
    <LegalPage
      title="Política de Reembolsos de Klientia"
      updated="9 de septiembre de 2026"
      summary={
        <>
          <strong>Resumen en lenguaje claro:</strong> Puedes pedir reembolso de tu suscripción dentro de los primeros
          14 días de cada cobro. <strong>Creem</strong> es el Merchant of Record de las suscripciones y{' '}
          <strong>Creem procesa todos los reembolsos</strong>.
        </>
      }
    >
      <h2 id="quien-procesa-los-reembolsos">1. Quién procesa los reembolsos</h2>
      <p>
        <strong>Creem</strong> es el Merchant of Record de las <strong>suscripciones</strong> (mensuales y anuales).
        Esto significa que{' '}
        <strong>Creem procesa todos los reembolsos</strong>, no una transferencia directa desde Klientia. Cuando se
        aprueba un reembolso, se devuelve al mismo método de pago que usaste para la compra original. Los mensajes de WhatsApp los cobra Meta directamente a tu cuenta y no son gestionados ni reembolsados por Klientia.
      </p>

      <h2 id="reembolso-de-la-suscripcion">2. Reembolso de la suscripción</h2>
      <ul>
        <li>
          Tienes <strong>14 días calendario</strong> desde la fecha de cada cobro de suscripción (ya sea el primer
          cobro tras la prueba gratuita, o cualquier renovación mensual o anual posterior) para solicitar un reembolso
          completo de ese cobro.
        </li>
        <li>
          Pasado ese plazo de 14 días, el cobro de ese período ya no es reembolsable, aunque siempre puedes cancelar
          la renovación futura desde tu panel o escribiéndonos.
        </li>
        <li>
          Si cancelas dentro del plazo de 14 días y solicitas el reembolso, tu acceso al plan de pago se desactiva al
          procesarse la devolución (puedes seguir usando el Servicio en un plan gratuito o de prueba si está
          disponible).
        </li>
        <li>
          Los reembolsos por defectos técnicos comprobables del Servicio (por ejemplo, una falla que te impidió usar
          la plataforma) pueden evaluarse fuera del plazo de 14 días, caso por caso, contactando primero a soporte.
        </li>
      </ul>

      <h2 id="que-no-cubre-esta-politica">3. Qué NO cubre esta política</h2>
      <ul>
        <li>Cobros de suscripción fuera del plazo de 14 días, salvo defecto técnico comprobable (ver sección 2).</li>
        <li>
          Cargos de terceros ajenos a Klientia: en particular, las tarifas de mensajería de WhatsApp que Meta cobra
          directamente a tu cuenta de WhatsApp Business (WABA) —Klientia no las cobra ni las reembolsa— y las
          comisiones de tu pasarela de pago (MercadoPago) por cobros a tus propios clientes finales.
        </li>
        <li>
          Insatisfacción con resultados de ventas: Klientia no garantiza un volumen de ventas específico (ver
          Términos de Servicio, sección 9); esto no es, por sí solo, causal de reembolso.
        </li>
      </ul>

      <h2 id="como-solicitar-un-reembolso">4. Cómo solicitar un reembolso</h2>
      <ol>
        <li>
          Escribe a <a href="mailto:info@klientia.app">info@klientia.app</a> indicando: correo de tu cuenta, fecha
          del cobro y el motivo de la solicitud.
        </li>
        <li>Revisaremos tu solicitud y verificaremos que cumple con esta política (plazo, etc.).</li>
        <li>
          Si tu solicitud es aprobada, la remitimos a Creem (nuestro Merchant of Record) para que procese el
          reembolso al método de pago original, normalmente en un plazo de hasta 14 días hábiles desde su
          aprobación.
        </li>
        <li>
          También puedes iniciar la solicitud directamente desde el correo de recibo que te envía Creem, si prefieres
          gestionarlo por esa vía.
        </li>
      </ol>

      <h2 id="contracargos">5. Contracargos (disputas con tu banco)</h2>
      <p>
        Si tienes un problema con un cobro, te pedimos que nos contactes primero a{' '}
        <a href="mailto:info@klientia.app">info@klientia.app</a> antes de iniciar un contracargo con tu banco o
        entidad emisora de tarjeta. Esto nos permite resolver la situación más rápido. Iniciar un contracargo sin
        contactarnos puede resultar en la suspensión temporal de tu cuenta mientras se revisa el caso.
      </p>

      <h2 id="cambios-a-esta-politica">6. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta Política de Reembolsos ocasionalmente. La versión vigente al momento de tu compra es
        la que aplica a esa transacción. Publicaremos cualquier cambio en esta misma página con su fecha de
        actualización.
      </p>

      <h2 id="contacto">7. Contacto</h2>
      <p>
        Para solicitudes de reembolso o dudas sobre esta política, escríbenos a{' '}
        <a href="mailto:info@klientia.app">
          <strong>info@klientia.app</strong>
        </a>
        .
      </p>
      <p>
        Klientia es un producto de <strong>Nextgen SAS</strong> (NIT 901.804.044-3), con domicilio en Cra 12
        #20a-121, Funza, Cundinamarca, Colombia.
      </p>
    </LegalPage>
  );
}
