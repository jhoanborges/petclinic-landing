# petClinic - Sistema de Gestión Veterinaria

## Descripción del Proyecto

petClinic es un sistema integral de administración veterinaria desarrollado con Next.js y TypeScript. Este software proporciona una solución completa para clínicas veterinarias que necesitan gestionar todos los aspectos de su negocio desde una sola plataforma.

## Características Principales

### 1. Gestión de Clientes y Mascotas
- Registro y administración de información de clientes
- Perfiles detallados de mascotas con historial médico
- Gestión de datos de contacto y seguimiento

### 2. Sistema de Citas con Kanban
- Organización visual de citas veterinarias
- Tablero kanban para optimizar el flujo de trabajo
- Programación y reprogramación de citas
- Estados de citas: pendiente, en progreso, completada

### 3. Punto de Venta (POS)
- Sistema POS integrado para ventas
- Procesamiento de pagos
- Venta de medicamentos, alimentos y productos veterinarios
- Generación de recibos y facturas

### 4. Gestión de Inventario
- Control completo del inventario
- Seguimiento de entradas y salidas de mercancía
- Niveles de stock en tiempo real
- Alertas automáticas para productos con stock bajo
- Gestión de proveedores

### 5. Módulo de Transacciones de Inventario
- Registro de entradas de mercancía
- Registro de salidas de mercancía
- Historial completo de transacciones
- Reportes de movimientos de inventario

### 6. Atención Veterinaria Integral
- Registro de tratamientos médicos
- Seguimiento de vacunas y medicamentos
- Historial clínico completo
- Notas y observaciones veterinarias

### 7. Reportes y Análisis
- Reportes de ventas y facturación
- Análisis de inventario
- Estadísticas de citas y clientes
- Dashboards con métricas importantes

## Tecnologías Utilizadas

- **Frontend**: Next.js 14+ con TypeScript
- **UI**: Tailwind CSS v4 + shadcn/ui
- **Base de Datos**: [Por definir]
- **Autenticación**: [Por definir]
- **Estado**: [Por definir]

## Estructura del Proyecto

```
shadcn-ui-landing-page/
├── app/                 # App Router de Next.js
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── navbar/         # Componentes de navegación
│   ├── hero.tsx        # Componente de hero
│   ├── features.tsx    # Componentes de características
│   └── ...
├── public/             # Archivos estáticos
├── lib/                # Utilidades y configuraciones
└── ...
```

## Variables de Entorno

```env
NEXT_PUBLIC_APP_NAME="petClinic"
```

## Idioma

El proyecto está desarrollado completamente en español para el mercado hispanohablante.

## Contexto para Claude

Este proyecto es un sistema completo de gestión veterinaria que incluye:
- Gestión de clientes y mascotas
- Sistema de citas con kanban
- Punto de venta (POS)
- Gestión de inventario
- Transacciones de mercancía
- Reportes y análisis

Cuando trabajas en este proyecto, siempre ten en cuenta que es para clínicas veterinarias y debe usar el nombre de la aplicación desde la variable de entorno `NEXT_PUBLIC_APP_NAME`.