export const getLongDate = (dateString) =>
  new Date(dateString).toLocaleDateString('ru-Lath', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
