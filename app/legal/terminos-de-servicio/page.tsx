import type { Metadata } from 'next';
import LegalPage, { type LegalTocItem } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description:
    'Términos de Servicio de Klientia: qué es el servicio, planes y facturación, monedero prepago, uso aceptable, propiedad intelectual y más.',
  alternates: { canonical: '/legal/terminos-de-servicio/' },
};

const TOC: LegalTocItem[] = [
  { id: 'quien-ofrece-el-servicio', label: '1. Quién ofrece el servicio' },
  { id: 'que-es-klientia', label: '2. Qué es Klientia' },
  { id: 'cuenta-y-elegibilidad', label: '3. Cuenta y elegibilidad' },
  { id: 'planes-precios-y-facturacion', label: '4. Planes, precios y facturación' },
  { id: 'monedero-prepago', label: '5. Monedero prepago y plantillas de WhatsApp' },
  { id: 'uso-aceptable', label: '6. Uso aceptable' },
  { id: 'propiedad-intelectual', label: '7. Propiedad intelectual' },
  { id: 'disponibilidad-del-servicio', label: '8. Disponibilidad del servicio' },
  { id: 'limitacion-de-responsabilidad', label: '9. Limitación de responsabilidad' },
  { id: 'terminacion', label: '10. Terminación' },
  { id: 'ley-aplicable-y-jurisdiccion', label: '11. Ley aplicable y jurisdicción' },
  { id: 'cambios-a-estos-terminos', label: '12. Cambios a estos Términos' },
  { id: 'contacto', label: '13. Contacto' },
];

export default function TerminosDeServicioPage() {
  return (
    <LegalPage
      title="Términos de Servicio de Klientia"
      updated="19 de agosto de 2026"
      toc={TOC}
      summary={
        <>
          <strong>Resumen en lenguaje claro:</strong> Klientia es una plataforma que te ayuda a vender por WhatsApp con
          un vendedor con inteligencia artificial. Al crear una cuenta y usar Klientia, aceptas estas condiciones.
          Léelas con calma; si algo no te queda claro, escríbenos a{' '}
          <a href="mailto:info@klientia.app">info@klientia.app</a>.
        </>
      }
    >
      <h2 id="quien-ofrece-el-servicio">1. Quién ofrece el servicio</h2>
      <p>
        Klientia es un producto de <strong>Nextgen SAS</strong>, identificada con{' '}
        <strong>NIT 901.804.044-3</strong>, con domicilio en{' '}
        <strong>Cra 12 #20a-121, Funza, Cundinamarca, Colombia</strong> (&quot;Klientia&quot;, &quot;nosotros&quot;).
        Estos Términos de Servicio (&quot;Términos&quot;) rigen el uso de la plataforma disponible en{' '}
        <a href="https://www.klientia.app" target="_blank" rel="noopener noreferrer">
          https://www.klientia.app
        </a>{' '}
        y{' '}
        <a href="https://app.klientia.app" target="_blank" rel="noopener noreferrer">
          https://app.klientia.app
        </a>{' '}
        (el &quot;Servicio&quot;).
      </p>
      <p>
        Al registrarte en{' '}
        <a href="https://app.klientia.app/register" target="_blank" rel="noopener noreferrer">
          https://app.klientia.app/register
        </a>
        , crear una cuenta o usar el Servicio, aceptas estos Términos en nombre tuyo o de la empresa que representas
        (&quot;tú&quot;, &quot;el comerciante&quot;, &quot;la organización&quot;).
      </p>

      <h2 id="que-es-klientia">2. Qué es Klientia</h2>
      <p>
        Klientia es un software como servicio (SaaS) que conecta el WhatsApp de tu negocio con un vendedor impulsado
        por inteligencia artificial. El Servicio puede incluir, según tu plan:
      </p>
      <ul>
        <li>Respuestas automáticas a tus clientes por WhatsApp.</li>
        <li>Agendamiento de citas.</li>
        <li>
          Cierre de ventas dentro de la conversación (incluyendo pedidos contra entrega y pagos en línea, según las
          integraciones que actives).
        </li>
        <li>
          Conexión con tu catálogo (por ejemplo, Shopify), con pasarelas de cobro (por ejemplo, MercadoPago) y con tu
          número de WhatsApp mediante nuestro proveedor de mensajería (Kapso).
        </li>
        <li>Envío de mensajes mediante plantillas de WhatsApp aprobadas.</li>
        <li>Un panel de administración para revisar conversaciones, pedidos, citas y métricas de tu negocio.</li>
      </ul>
      <p>
        Cada comerciante opera dentro de su propia &quot;organización&quot; con datos aislados de los de otros
        comerciantes (arquitectura multi-tenant).
      </p>
      <p>
        <strong>Lo que Klientia no es:</strong> Klientia no crea ni administra las plantillas de mensajes de WhatsApp
        — eso se hace en la plataforma de nuestro proveedor de mensajería (Kapso), sujeto a las políticas de
        Meta/WhatsApp. Klientia tampoco es una entidad financiera ni procesa ni almacena los datos de tu tarjeta de
        crédito o débito (ver sección 5).
      </p>

      <h2 id="cuenta-y-elegibilidad">3. Cuenta y elegibilidad</h2>
      <ul>
        <li>
          Debes tener capacidad legal para contratar y, si actúas en nombre de una empresa, autoridad para obligarla
          a estos Términos.
        </li>
        <li>Debes proporcionar información veraz al registrarte y mantenerla actualizada.</li>
        <li>
          Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de toda actividad que
          ocurra bajo tu cuenta.
        </li>
        <li>
          Klientia se reserva el derecho de suspender o cerrar cuentas que incumplan estos Términos, que se usen de
          forma fraudulenta, o que representen un riesgo para otros usuarios o para el Servicio.
        </li>
      </ul>

      <h2 id="planes-precios-y-facturacion">4. Planes, precios y facturación</h2>
      <h3>4.1 Planes de suscripción</h3>
      <p>
        Klientia ofrece planes de suscripción mensual, entre ellos (precios de lanzamiento en USD, sujetos a cambio
        con aviso previo):
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Precio</th>
              <th>Enfoque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Responde</td>
              <td>$19 USD/mes</td>
              <td>Respuestas automáticas por WhatsApp</td>
            </tr>
            <tr>
              <td>Agenda</td>
              <td>$29 USD/mes</td>
              <td>Respuestas + agendamiento de citas</td>
            </tr>
            <tr>
              <td>Vende</td>
              <td>$49 USD/mes</td>
              <td>Respuestas + agendamiento + cierre de ventas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Puedes acceder a un período de prueba gratuito antes de que se te cobre. Al terminar la prueba (y un eventual
        período de gracia informado en la plataforma), la suscripción se activa y se cobra de forma recurrente hasta
        que la canceles.
      </p>

      <h3>4.2 Creem como Merchant of Record</h3>
      <p>
        <strong>Creem</strong> es nuestro procesador de pagos y actúa como{' '}
        <strong>Merchant of Record (comerciante registrado)</strong> de las{' '}
        <strong>suscripciones y de las recargas del monedero prepago</strong> de Klientia. Esto significa que:
      </p>
      <ul>
        <li>Creem es quien te factura, cobra el pago y remite los impuestos aplicables (IVA, impuesto a las ventas u otros según tu país).</li>
        <li>El recibo o factura que recibes por tu suscripción es emitido por Creem, no directamente por Klientia.</li>
        <li>
          <strong>Klientia nunca solicita ni almacena los datos de tu tarjeta.</strong> El pago se captura en la
          pantalla de checkout alojada por Creem; Klientia solo recibe una referencia/confirmación de que el pago
          fue exitoso.
        </li>
        <li>
          Los precios mostrados pueden incluir o excluir impuestos según tu ubicación; Creem calcula el impuesto
          correspondiente en el checkout.
        </li>
      </ul>

      <h3>4.3 Renovación y cancelación</h3>
      <ul>
        <li>
          Las suscripciones se renuevan automáticamente al final de cada período (mensual) salvo que las canceles
          antes de la fecha de renovación.
        </li>
        <li>
          Puedes cancelar en cualquier momento desde tu panel de Klientia o solicitándolo a{' '}
          <a href="mailto:info@klientia.app">info@klientia.app</a>. La cancelación aplica al final del período ya
          pagado; no se generan cobros adicionales después de cancelar.
        </li>
        <li>
          Ver la{' '}
          <a href="/legal/politica-de-reembolsos/">Política de reembolsos</a> para condiciones de devolución.
        </li>
      </ul>

      <h2 id="monedero-prepago">5. Monedero prepago y envío de plantillas de WhatsApp</h2>
      <p>
        Además de la suscripción, el envío de mensajes de plantilla de WhatsApp (por ejemplo, notificaciones,
        recordatorios o campañas de recompra) se cobra por separado mediante un <strong>monedero prepago</strong>:
      </p>
      <ul>
        <li>Recargas tu saldo en packs predefinidos (por ejemplo $20 / $50 / $100 USD), con una recarga mínima de $20 USD.</li>
        <li>Cada envío de plantilla descuenta el costo correspondiente de tu saldo disponible.</li>
        <li>
          Las recargas del monedero las procesa <strong>Creem</strong> como <strong>Merchant of Record</strong>: Creem
          es el vendedor registrado de la recarga, aparece en tu extracto bancario, emite la factura y calcula y remite
          los impuestos aplicables. Klientia no almacena los datos de tu tarjeta en este proceso (los captura el
          checkout alojado de Creem). Al recargar aceptas también los{' '}
          <a href="https://www.creem.io/buyer-terms" target="_blank" rel="noopener noreferrer">
            Términos para Compradores de Creem
          </a>
          .
        </li>
        <li>El saldo del monedero no genera intereses ni es transferible a otra organización.</li>
        <li>
          Ver la sección de monedero en la{' '}
          <a href="/legal/politica-de-reembolsos/">Política de reembolsos</a> para condiciones sobre saldo no
          utilizado.
        </li>
      </ul>
      <p>
        Klientia no crea, redacta ni aprueba las plantillas de WhatsApp: esa gestión ocurre en la plataforma de
        nuestro proveedor de mensajería (Kapso) y está sujeta a las políticas de aprobación de Meta/WhatsApp, ajenas
        al control de Klientia.
      </p>

      <h2 id="uso-aceptable">6. Uso aceptable</h2>
      <p>Al usar Klientia, te comprometes a NO:</p>
      <ul>
        <li>Usar el Servicio para enviar spam, contenido engañoso, fraudulento o ilegal a tus clientes finales.</li>
        <li>
          Vender productos o servicios prohibidos por la ley aplicable o por las políticas de WhatsApp/Meta.
        </li>
        <li>
          Intentar vulnerar la seguridad de la plataforma, acceder a datos de otras organizaciones, o realizar
          ingeniería inversa del software.
        </li>
        <li>
          Usar el Servicio de forma que infrinja los derechos de terceros (propiedad intelectual, protección de
          datos, competencia desleal, entre otros).
        </li>
        <li>Sobrecargar deliberadamente la infraestructura del Servicio.</li>
      </ul>
      <p>
        Klientia puede suspender el acceso de forma inmediata si detecta un uso que viole esta sección, sin perjuicio
        de otras acciones legales disponibles.
      </p>

      <h2 id="propiedad-intelectual">7. Propiedad intelectual</h2>
      <ul>
        <li>
          Klientia y sus licenciantes son propietarios de todo el software, marca, diseño y demás elementos de la
          plataforma. Estos Términos no te otorgan ninguna propiedad sobre el Servicio, solo una licencia limitada,
          no exclusiva e intransferible para usarlo mientras tu cuenta esté activa.
        </li>
        <li>
          Tú conservas la propiedad de tu contenido (catálogo, mensajes de marca, datos de tu negocio) que cargues en
          la plataforma. Nos otorgas una licencia limitada para procesarlo únicamente con el fin de prestarte el
          Servicio.
        </li>
      </ul>

      <h2 id="disponibilidad-del-servicio">8. Disponibilidad del servicio</h2>
      <p>
        Klientia se esfuerza por mantener el Servicio disponible de forma continua, pero no garantiza que estará
        libre de interrupciones, errores o fallas de terceros (por ejemplo, cambios en las APIs de WhatsApp/Meta,
        Shopify, MercadoPago, OpenAI u otros proveedores externos que integramos). El Servicio se ofrece &quot;tal
        cual&quot; y &quot;según disponibilidad&quot;, sin garantías de ningún tipo, expresas o implícitas, salvo las
        que la ley aplicable no permita excluir.
      </p>

      <h2 id="limitacion-de-responsabilidad">9. Limitación de responsabilidad</h2>
      <p>En la máxima medida permitida por la ley aplicable:</p>
      <ul>
        <li>
          Klientia no será responsable por daños indirectos, incidentales, especiales o consecuentes (incluyendo
          pérdida de ventas, de datos o de oportunidades de negocio) derivados del uso o la imposibilidad de uso del
          Servicio.
        </li>
        <li>
          La responsabilidad total de Klientia frente a ti, por cualquier reclamo relacionado con el Servicio, no
          excederá el monto pagado por ti a Klientia en los últimos tres (3) meses previos al reclamo.
        </li>
        <li>
          Klientia no garantiza resultados de ventas específicos: el rendimiento del vendedor con IA depende de
          múltiples factores fuera de nuestro control (tu catálogo, tus precios, el comportamiento de tus clientes,
          entre otros).
        </li>
      </ul>

      <h2 id="terminacion">10. Terminación</h2>
      <ul>
        <li>Puedes dejar de usar el Servicio y cancelar tu cuenta en cualquier momento.</li>
        <li>
          Klientia puede suspender o terminar tu acceso si incumples estos Términos, si tu pago no se procesa
          correctamente, o por decisión de negocio con aviso razonable, salvo en casos de fraude o riesgo de
          seguridad donde la suspensión puede ser inmediata.
        </li>
        <li>
          Al terminar la cuenta, tus datos se tratarán conforme a nuestro{' '}
          <a href="/legal/aviso-de-privacidad/">Aviso de Privacidad</a>.
        </li>
      </ul>

      <h2 id="ley-aplicable-y-jurisdiccion">11. Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de la República de Colombia, sin perjuicio de los derechos que la ley
        de protección al consumidor de tu país de residencia te otorgue de forma imperativa. Cualquier disputa se
        resolverá ante los tribunales competentes de dicha jurisdicción, salvo acuerdo distinto entre las partes.
      </p>

      <h2 id="cambios-a-estos-terminos">12. Cambios a estos Términos</h2>
      <p>
        Podemos actualizar estos Términos ocasionalmente. Si el cambio es significativo, te lo notificaremos por
        correo electrónico o dentro de la plataforma con al menos 30 días de anticipación. El uso continuado del
        Servicio después de esa fecha implica tu aceptación de los nuevos Términos.
      </p>

      <h2 id="contacto">13. Contacto</h2>
      <p>
        Para preguntas sobre estos Términos, escríbenos a{' '}
        <a href="mailto:info@klientia.app">
          <strong>info@klientia.app</strong>
        </a>
        .
      </p>
    </LegalPage>
  );
}
