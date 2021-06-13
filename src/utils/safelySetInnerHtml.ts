const sanitizeHtml = require('sanitize-html');

export const safelySetInnerHtml = (html: string) => {
    return sanitizeHtml(html);
};
