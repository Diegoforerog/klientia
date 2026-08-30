import type { Metadata } from 'next';
import LegalPage, { type LegalTocItem } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Eliminación de datos de usuario',
  description:
    'Cómo pedir que Klientia elimine los datos de tus cuentas conectadas de WhatsApp, Instagram o Messenger, en cuánto tiempo lo hacemos y cómo revocar el acceso en Meta.',
  alternates: { canonical: '/legal/eliminacion-de-datos/' },
};

const TOC: LegalTocItem[] = [
  { id: 'que-datos-guardamos', label: '1. Qué datos guardamos de tus cuentas conectadas' },
  { id: 'como-pedir-la-eliminacion', label: '2. Cómo pedir la eliminación de tus datos' },
  { id: 'que-se-elimina-y-en-cuanto-tiempo', label: '3. Qué se elimina y en cuánto tiempo' },
  { id: 'como-desconectar-tu-cuenta-de-meta', label: '4. Cómo desconectar tu cuenta de Meta' },
  { id: 'contacto', label: '5. Contacto' },
];

export default function EliminacionDeDatosPage() {
  return (
    <LegalPage
      title="Eliminación de datos de usuario"
      updated="25 de agosto de 2026"
      toc={TOC}
      summary={
        <>
          <strong>Resumen en lenguaje claro:</strong> En Klientia puedes pedir que borremos los datos asociados a tus
          cuentas conectadas de WhatsApp, Instagram o Messenger, y desconectar esas cuentas cuando quieras. Aquí te
          explicamos qué guardamos, cómo pedir la eliminación y en cuánto tiempo lo hacemos.
        </>
      }
    >
      <h2 id="que-datos-guardamos">1. Qué datos guardamos de tus cuentas conectadas</h2>
      <p>
        Cuando conectas tu WhatsApp Business, Instagram o Messenger a Klientia para atender y vender con tu asistente
        de IA, procesamos:
      </p>
      <ul>
        <li>
          <strong>Mensajes y conversaciones</strong> (WhatsApp, DMs y comentarios de Instagram, mensajes de Messenger)
          necesarios para responder, agendar y cerrar ventas.
        </li>
        <li>
          <strong>Datos de contacto</strong> de las personas que te escriben (número de WhatsApp o identificador de
          red social y nombre de perfil).
        </li>
        <li>
          <strong>Tokens de conexión</strong> con Meta, guardados de forma <strong>cifrada</strong>, que autorizan a
          Klientia a operar tus cuentas en tu nombre.
        </li>
        <li>
          <strong>Datos de tu cuenta de Klientia</strong> (negocio, configuración, catálogo).
        </li>
      </ul>
      <p>
        Klientia opera con datos aislados por negocio: ningún otro comerciante puede ver tu información ni tus
        conversaciones.
      </p>

      <h2 id="como-pedir-la-eliminacion">2. Cómo pedir la eliminación de tus datos</h2>
      <p>Tienes dos formas:</p>
      <ul>
        <li>
          <strong>Desde el panel de Klientia</strong>, desconecta la cuenta que quieras:
          <ul>
            <li>
              <strong>WhatsApp:</strong> Ajustes &rarr; pestaña <strong>WhatsApp</strong> &rarr; <strong>Desconectar</strong>.
            </li>
            <li>
              <strong>Instagram y Messenger:</strong> sección <strong>Redes</strong> &rarr; <strong>Desconectar</strong> la cuenta.
            </li>
          </ul>
          Al desconectarla, dejamos de acceder a ella y puedes solicitar el borrado de los datos asociados.
        </li>
        <li>
          <strong>Por correo:</strong> escríbenos a{' '}
          <a href="mailto:info@klientia.app">
            <strong>info@klientia.app</strong>
          </a>{' '}
          desde el correo de tu cuenta, con el asunto <strong>&quot;Eliminación de datos&quot;</strong>, indicando qué
          cuenta(s) conectada(s) quieres borrar. Confirmamos la solicitud y procedemos.
        </li>
      </ul>
      <p>
        Si eres un <strong>cliente final</strong> (una persona que le escribió a un negocio que usa Klientia) y
        quieres que se borren tus datos, contacta directamente a ese negocio: es el responsable de tu información.
        Klientia colaborará con el negocio para atender tu solicitud.
      </p>

      <h2 id="que-se-elimina-y-en-cuanto-tiempo">3. Qué se elimina y en cuánto tiempo</h2>
      <ul>
        <li>
          Una vez confirmada tu solicitud, eliminamos los datos asociados a la(s) cuenta(s) indicada(s) en un plazo
          máximo de <strong>30 días</strong>.
        </li>
        <li>
          Se eliminan: mensajes y conversaciones, datos de contacto capturados, y los <strong>tokens de conexión</strong>{' '}
          con Meta.
        </li>
        <li>
          <strong>Excepción legal:</strong> podemos conservar cierta información el tiempo mínimo que exija la ley (por
          ejemplo, registros de facturación) o para resolver disputas. Esa información no se usa para ningún otro fin y
          se elimina al vencer el plazo legal.
        </li>
      </ul>

      <h2 id="como-desconectar-tu-cuenta-de-meta">4. Cómo desconectar tu cuenta de Meta (revocar el acceso)</h2>
      <p>Puedes revocar el acceso de Klientia en cualquier momento, además de desde el panel:</p>
      <ul>
        <li>
          <strong>En Facebook:</strong> Configuración &rarr; <strong>Aplicaciones y sitios web</strong> &rarr; busca{' '}
          <strong>Klientia</strong> &rarr; <strong>Eliminar</strong>.
        </li>
        <li>
          <strong>En Instagram:</strong> Configuración &rarr; <strong>Aplicaciones y sitios web</strong> &rarr;{' '}
          <strong>Activas</strong> &rarr; <strong>Klientia</strong> &rarr; <strong>Eliminar</strong>.
        </li>
        <li>
          <strong>En el Administrador de WhatsApp / Meta Business:</strong> en la configuración de tu cuenta de
          negocio, revoca el acceso de la integración.
        </li>
      </ul>
      <p>
        Al revocar el acceso, Klientia deja de poder operar esas cuentas. Para borrar además los datos ya guardados,
        sigue el paso 2.
      </p>

      <h2 id="contacto">5. Contacto</h2>
      <p>
        Para cualquier duda o solicitud sobre la eliminación de tus datos, escríbenos a{' '}
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
