import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Reembolsos',
  description:
    'Política de Reembolsos de Klientia: plazo de 14 días para suscripciones y saldo del monedero no utilizado, procesados por Creem (nuestro Merchant of Record).',
  alternates: { canonical: '/legal/politica-de-reembolsos/' },
};

export default function PoliticaDeReembolsosPage() {
  return (
    <LegalPage
      title="Política de Reembolsos de Klientia"
      updated="19 de agosto de 2026"
      summary={
        <>
          <strong>Resumen en lenguaje claro:</strong> Puedes pedir reembolso de tu suscripción dentro de los primeros
          14 días de cada cobro. El saldo de tu monedero prepago que aún no hayas usado en envíos de plantillas de
          WhatsApp también es reembolsable dentro de ese mismo plazo; el saldo ya consumido en envíos no se
          reembolsa. <strong>Creem</strong> es el Merchant of Record de las suscripciones y de las recargas del
          monedero, y <strong>Creem procesa todos los reembolsos</strong>.
        </>
      }
    >
      <h2 id="quien-procesa-los-reembolsos">1. Quién procesa los reembolsos</h2>
      <p>
        <strong>Creem</strong> es el Merchant of Record de las <strong>suscripciones</strong> y de las{' '}
        <strong>recargas del monedero prepago</strong>. Esto significa que{' '}
        <strong>Creem procesa todos los reembolsos</strong>, no una transferencia directa desde Klientia. Cuando se
        aprueba un reembolso, se devuelve al mismo método de pago que usaste para la compra original.
      </p>

      <h2 id="reembolso-de-la-suscripcion">2. Reembolso de la suscripción</h2>
      <ul>
        <li>
          Tienes <strong>14 días calendario</strong> desde la fecha de cada cobro de suscripción (ya sea el primer
          cobro tras la prueba gratuita, o cualquier renovación mensual posterior) para solicitar un reembolso
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

      <h2 id="reembolso-del-saldo-del-monedero-prepago">3. Reembolso del saldo del monedero prepago</h2>
      <p>
        El monedero prepago (recargas en packs de $20 / $50 / $100 USD, con recarga mínima de $20 USD) se usa para
        pagar el envío de plantillas de WhatsApp. Distinguimos dos situaciones:
      </p>
      <ul>
        <li>
          <strong>Saldo no utilizado:</strong> si aún no has gastado el saldo de una recarga, puedes solicitar el
          reembolso de esa recarga dentro de los <strong>14 días calendario</strong> posteriores a la fecha en que la
          hiciste.
        </li>
        <li>
          <strong>Saldo ya consumido en envíos:</strong> el saldo que ya se usó para pagar envíos de plantillas de
          WhatsApp <strong>no es reembolsable</strong>, ya que corresponde a un servicio de mensajería ya prestado
          (el envío efectivo del mensaje a través de nuestro proveedor de mensajería).
        </li>
        <li>
          Si una recarga tiene saldo parcialmente usado, solo la porción no utilizada dentro del plazo de 14 días es
          elegible para reembolso.
        </li>
      </ul>

      <h2 id="que-no-cubre-esta-politica">4. Qué NO cubre esta política</h2>
      <ul>
        <li>Saldo del monedero ya consumido en envíos de plantillas (ver sección 3).</li>
        <li>Cobros de suscripción o recargas fuera del plazo de 14 días, salvo defecto técnico comprobable (ver sección 2).</li>
        <li>
          Cargos de terceros ajenos a Klientia, por ejemplo comisiones de Meta/WhatsApp por conversaciones o
          plantillas que se cobren directamente al comerciante fuera de la plataforma de Klientia, o comisiones de tu
          pasarela de pago (MercadoPago) por cobros a tus propios clientes finales.
        </li>
        <li>
          Insatisfacción con resultados de ventas: Klientia no garantiza un volumen de ventas específico (ver
          Términos de Servicio, sección 9); esto no es, por sí solo, causal de reembolso.
        </li>
      </ul>

      <h2 id="como-solicitar-un-reembolso">5. Cómo solicitar un reembolso</h2>
      <ol>
        <li>
          Escribe a <a href="mailto:info@klientia.app">info@klientia.app</a> indicando: correo de tu cuenta, fecha
          del cobro o recarga, y el motivo de la solicitud.
        </li>
        <li>Revisaremos tu solicitud y verificaremos que cumple con esta política (plazo, saldo no consumido, etc.).</li>
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

      <h2 id="contracargos">6. Contracargos (disputas con tu banco)</h2>
      <p>
        Si tienes un problema con un cobro, te pedimos que nos contactes primero a{' '}
        <a href="mailto:info@klientia.app">info@klientia.app</a> antes de iniciar un contracargo con tu banco o
        entidad emisora de tarjeta. Esto nos permite resolver la situación más rápido. Iniciar un contracargo sin
        contactarnos puede resultar en la suspensión temporal de tu cuenta mientras se revisa el caso.
      </p>

      <h2 id="cambios-a-esta-politica">7. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta Política de Reembolsos ocasionalmente. La versión vigente al momento de tu compra es
        la que aplica a esa transacción. Publicaremos cualquier cambio en esta misma página con su fecha de
        actualización.
      </p>

      <h2 id="contacto">8. Contacto</h2>
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
