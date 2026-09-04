import type { Metadata } from 'next';
import LegalPage, { type LegalTocItem } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description:
    'Aviso de Privacidad de Klientia: qué datos recopilamos de comerciantes y clientes finales, con quién los compartimos y qué derechos tienes.',
  alternates: { canonical: '/legal/aviso-de-privacidad/' },
};

const TOC: LegalTocItem[] = [
  { id: 'quien-es-responsable-de-tus-datos', label: '1. Quién es responsable de tus datos' },
  { id: 'dos-roles-distintos', label: '2. Dos roles distintos: comerciante y clientes finales' },
  { id: 'para-que-usamos-los-datos', label: '3. Para qué usamos los datos' },
  { id: 'con-quien-compartimos-los-datos', label: '4. Con quién compartimos los datos' },
  { id: 'aislamiento-de-datos', label: '5. Aislamiento de datos (multi-tenant)' },
  { id: 'cuanto-tiempo-conservamos-los-datos', label: '6. Cuánto tiempo conservamos los datos' },
  { id: 'tus-derechos', label: '7. Tus derechos' },
  { id: 'seguridad', label: '8. Seguridad' },
  { id: 'transferencias-internacionales', label: '9. Transferencias internacionales' },
  { id: 'menores-de-edad', label: '10. Menores de edad' },
  { id: 'cambios-a-este-aviso', label: '11. Cambios a este aviso' },
  { id: 'contacto', label: '12. Contacto' },
];

export default function AvisoDePrivacidadPage() {
  return (
    <LegalPage
      title="Aviso de Privacidad de Klientia"
      updated="19 de agosto de 2026"
      toc={TOC}
      summary={
        <>
          <strong>Resumen en lenguaje claro:</strong> Klientia maneja dos tipos de datos: (1) los datos de tu cuenta
          como comerciante, y (2) los datos de las personas que te escriben por WhatsApp (tus clientes finales). Este
          aviso explica qué recopilamos, para qué, con quién lo compartimos y qué derechos tienes sobre tu
          información.
        </>
      }
    >
      <h2 id="quien-es-responsable-de-tus-datos">1. Quién es responsable de tus datos</h2>
      <p>
        Klientia es un producto de <strong>Nextgen SAS</strong> (&quot;Klientia&quot;, &quot;nosotros&quot;),
        identificada con <strong>NIT 901.804.044-3</strong> y domicilio en{' '}
        <strong>Cra 12 #20a-121, Funza, Cundinamarca, Colombia</strong>, que opera la plataforma disponible en{' '}
        <a href="https://www.klientia.app" target="_blank" rel="noopener noreferrer">
          https://www.klientia.app
        </a>{' '}
        y{' '}
        <a href="https://app.klientia.app" target="_blank" rel="noopener noreferrer">
          https://app.klientia.app
        </a>
        .
      </p>
      <p>
        Para preguntas sobre privacidad y datos personales, escríbenos a{' '}
        <a href="mailto:info@klientia.app">
          <strong>info@klientia.app</strong>
        </a>
        .
      </p>

      <h2 id="dos-roles-distintos">2. Dos roles distintos: comerciante y clientes finales</h2>
      <p>
        Es importante distinguir dos categorías de datos que Klientia procesa, porque el rol legal de Klientia es
        diferente en cada caso:
      </p>

      <h3>2.1 Datos de tu cuenta (tú, el comerciante)</h3>
      <p>
        Cuando te registras y usas Klientia, <strong>Klientia es el Responsable (Controlador)</strong> de los datos
        de tu cuenta: decide para qué se usan y cómo se protegen.
      </p>
      <p>
        <strong>Qué recopilamos de ti:</strong>
      </p>
      <ul>
        <li>Datos de registro: nombre, correo electrónico, contraseña (cifrada), nombre de tu negocio, país.</li>
        <li>
          Datos de facturación: los procesa <strong>Creem</strong> como Merchant of Record; Klientia recibe solo
          una referencia de pago, el plan o pack contratado y el estado —{' '}
          <strong>no recibimos ni almacenamos los datos completos de tu tarjeta</strong>.
        </li>
        <li>
          Datos de configuración de tu negocio: catálogo de productos (propio o sincronizado desde Shopify),
          horarios de atención, plantillas de mensajes, integraciones que actives (MercadoPago, Shopify, número de
          WhatsApp).
        </li>
        <li>
          Datos de uso de la plataforma: registros de acceso, acciones dentro del panel, métricas de desempeño de tu
          vendedor con IA.
        </li>
        <li>Comunicaciones de soporte que nos envíes.</li>
      </ul>

      <h3>2.2 Datos de tus clientes finales (las personas que te escriben por WhatsApp)</h3>
      <p>
        Cuando un comprador chatea con tu negocio a través de Klientia,{' '}
        <strong>tú (el comerciante) eres el Responsable (Controlador)</strong> de los datos de esa persona, y{' '}
        <strong>Klientia actúa como Encargado (Procesador)</strong>: tratamos esos datos únicamente para prestarte el
        Servicio, siguiendo tus instrucciones (por ejemplo, responder, agendar una cita o registrar un pedido), y no
        los usamos para fines propios distintos a operar y mejorar la plataforma de forma agregada.
      </p>
      <p>
        <strong>Qué se procesa de tus clientes finales:</strong>
      </p>
      <ul>
        <li>Número de WhatsApp y nombre de perfil.</li>
        <li>
          Contenido de los mensajes de la conversación (texto, y en algunos casos audio/imágenes según el canal
          habilitado).
        </li>
        <li>
          Datos del pedido o cita: productos, dirección de entrega (si aplica a envíos contra entrega), fecha y hora
          de la cita, método de pago elegido.
        </li>
        <li>
          Metadatos de la conversación: fecha, hora, estado (respondida, agendada, cerrada, con intervención
          humana).
        </li>
      </ul>
      <p>
        Como comerciante, es tu responsabilidad informar a tus clientes finales sobre el tratamiento de sus datos
        (por ejemplo, en tu propia política de privacidad) y contar con una base legal válida para que Klientia
        procese esa información en tu nombre.
      </p>

      <h2 id="para-que-usamos-los-datos">3. Para qué usamos los datos</h2>
      <ul>
        <li>Prestar el Servicio: responder mensajes, agendar citas, procesar pedidos, gestionar el monedero y las suscripciones.</li>
        <li>
          Generar respuestas automáticas mediante inteligencia artificial (los mensajes de la conversación se envían
          a nuestro proveedor de IA para generar la respuesta; ver sección 4).
        </li>
        <li>Facturar y cobrar las suscripciones y las recargas del monedero (a través de Creem, como Merchant of Record).</li>
        <li>
          Enviar notificaciones operativas por correo (por ejemplo, confirmaciones, alertas de saldo bajo, avisos de
          facturación).
        </li>
        <li>Dar soporte técnico y atender solicitudes.</li>
        <li>
          Mejorar el Servicio de forma agregada y anonimizada (por ejemplo, entender qué tipos de respuesta funcionan
          mejor), sin identificar a personas específicas cuando sea posible.
        </li>
        <li>Prevenir fraude y proteger la seguridad de la plataforma.</li>
      </ul>

      <h2 id="con-quien-compartimos-los-datos">4. Con quién compartimos los datos (terceros y proveedores)</h2>
      <p>
        Klientia usa proveedores externos especializados para operar el Servicio. Cada uno procesa solo los datos
        necesarios para su función:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Para qué lo usamos</th>
              <th>Qué datos toca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Creem</strong>
              </td>
              <td>Procesar los pagos de las suscripciones y las recargas del monedero; factura, cobra y remite impuestos como Merchant of Record</td>
              <td>
                Datos de facturación y pago del comerciante (Creem captura los datos de tarjeta directamente;
                Klientia no los recibe)
              </td>
            </tr>
            <tr>
              <td>
                <strong>Proveedor de mensajería y redes</strong>
              </td>
              <td>
                Conectar tus canales de mensajería y redes sociales (WhatsApp, Instagram, Facebook, Messenger y
                TikTok): enviar y recibir mensajes, publicar contenido y gestionar comentarios
              </td>
              <td>
                Número o cuenta y contenido de las conversaciones, mensajes y comentarios con tus clientes finales en
                esos canales
              </td>
            </tr>
            <tr>
              <td>
                <strong>Shopify</strong>
              </td>
              <td>Sincronizar tu catálogo de productos y pedidos, si conectas tu tienda</td>
              <td>Catálogo, variantes, pedidos</td>
            </tr>
            <tr>
              <td>
                <strong>OpenAI</strong>
              </td>
              <td>Generar las respuestas del vendedor con inteligencia artificial (modelo gpt-4o-mini u otro vigente)</td>
              <td>Contenido de los mensajes de la conversación necesarios para generar una respuesta</td>
            </tr>
            <tr>
              <td>
                <strong>MercadoPago</strong>
              </td>
              <td>Procesar cobros a tus clientes finales, si activas esta integración</td>
              <td>Datos de pago del pedido de tu cliente final (el flujo de pago lo controla MercadoPago)</td>
            </tr>
            <tr>
              <td>
                <strong>Zoho ZeptoMail y Resend</strong>
              </td>
              <td>Enviar correos operativos (códigos de verificación, notificaciones)</td>
              <td>Correo electrónico y contenido del mensaje enviado</td>
            </tr>
            <tr>
              <td>
                <strong>Google</strong>
              </td>
              <td>Inicio de sesión con Google y sincronización con Google Calendar (si conectas tu agenda)</td>
              <td>Correo y datos básicos de tu cuenta de Google; eventos de calendario que sincronices</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        No vendemos tus datos ni los de tus clientes finales a terceros con fines publicitarios. Compartimos
        información solo cuando es necesaria para operar el Servicio, cuando la ley lo exige, o con tu consentimiento
        explícito.
      </p>

      <h2 id="aislamiento-de-datos">5. Aislamiento de datos entre comerciantes (multi-tenant)</h2>
      <p>
        Klientia opera con una arquitectura donde cada comerciante es una &quot;organización&quot; con sus datos
        lógicamente aislados de los de otras organizaciones. Ningún comerciante puede ver los datos, conversaciones o
        clientes de otro comerciante.
      </p>

      <h2 id="cuanto-tiempo-conservamos-los-datos">6. Cuánto tiempo conservamos los datos</h2>
      <p>
        Conservamos los datos de tu cuenta y de tus conversaciones mientras tu cuenta esté activa y por el período
        adicional necesario para cumplir obligaciones legales, contables o de resolución de disputas. Si cancelas tu
        cuenta, puedes solicitar la eliminación de tus datos conforme a la sección 7, sujeto a las excepciones
        legales que nos obliguen a conservar cierta información (por ejemplo, registros de facturación).
      </p>

      <h2 id="tus-derechos">7. Tus derechos</h2>
      <p>Dependiendo de tu país de residencia, puedes tener derecho a:</p>
      <ul>
        <li>
          <strong>Acceder</strong> a los datos personales que tenemos sobre ti.
        </li>
        <li>
          <strong>Rectificar</strong> datos inexactos o incompletos.
        </li>
        <li>
          <strong>Eliminar</strong> tus datos (&quot;derecho al olvido&quot;), sujeto a obligaciones legales de
          conservación.
        </li>
        <li>
          <strong>Oponerte</strong> o <strong>limitar</strong> ciertos tratamientos.
        </li>
        <li>
          <strong>Portabilidad</strong>: solicitar tus datos en un formato estructurado.
        </li>
        <li>
          <strong>Retirar el consentimiento</strong> en cualquier momento, cuando el tratamiento se base en él.
        </li>
      </ul>
      <p>
        Para ejercer estos derechos, escríbenos a{' '}
        <a href="mailto:info@klientia.app">
          <strong>info@klientia.app</strong>
        </a>
        . Responderemos dentro del plazo que exija la ley aplicable en tu país.
      </p>
      <p>
        Si eres un cliente final de un comerciante que usa Klientia y quieres ejercer estos derechos, te recomendamos
        contactar directamente al comerciante (la tienda con la que hablaste por WhatsApp), ya que es el Responsable
        de tus datos; Klientia colaborará con el comerciante para atender tu solicitud como Encargado del
        tratamiento.
      </p>

      <h2 id="seguridad">8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger los datos, incluyendo cifrado de
        contraseñas, control de acceso por organización, y comunicación cifrada (HTTPS). Ningún sistema es 100%
        infalible; si detectamos un incidente de seguridad que afecte tus datos, te notificaremos conforme a la ley
        aplicable.
      </p>

      <h2 id="transferencias-internacionales">9. Transferencias internacionales</h2>
      <p>
        Algunos de nuestros proveedores (por ejemplo, Creem, OpenAI) pueden procesar datos fuera de tu país o
        región. En esos casos, nos apoyamos en los mecanismos de transferencia y garantías contractuales que dichos
        proveedores ofrecen (por ejemplo, cláusulas contractuales estándar), conforme a la normativa aplicable.
      </p>

      <h2 id="menores-de-edad">10. Menores de edad</h2>
      <p>
        El Servicio está dirigido a comerciantes y sus operaciones de negocio, no a menores de edad. No recopilamos
        intencionalmente datos de menores para la creación de cuentas de comerciante.
      </p>

      <h2 id="cambios-a-este-aviso">11. Cambios a este aviso</h2>
      <p>
        Podemos actualizar este Aviso de Privacidad ocasionalmente. Publicaremos la versión vigente en esta misma
        página con su fecha de actualización. Si el cambio es significativo, te avisaremos por correo o dentro de la
        plataforma.
      </p>

      <h2 id="contacto">12. Contacto</h2>
      <p>
        Para cualquier duda sobre este aviso o sobre el tratamiento de tus datos, escríbenos a{' '}
        <a href="mailto:info@klientia.app">
          <strong>info@klientia.app</strong>
        </a>
        .
      </p>
    </LegalPage>
  );
}
