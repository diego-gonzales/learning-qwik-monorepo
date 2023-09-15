const DATE_UNITS: Record<string, number> = {
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
} as const;

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const getRelativeTime = (epochTime: number) => {
  const started = new Date(epochTime * 1000).getTime();
  const now = new Date().getTime();

  const elapsed = (started - now) / 1000;

  for (const unit in DATE_UNITS) {
    const absElapsed = Math.abs(elapsed);

    if (absElapsed > DATE_UNITS[unit] || unit === 'second') {
      return rtf.format(
        Math.round(elapsed / DATE_UNITS[unit]), // el elapsed tiene valor negativo para que el tiempo sea relativo al pasado, de lo contrario sería relativo al futuro (ej: "dentro de 5 minutos" en vez de "hace 5 minutos")
        unit as Intl.RelativeTimeFormatUnit
      );
    }
  }

  return '';
};
