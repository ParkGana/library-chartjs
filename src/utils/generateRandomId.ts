/* 4자리 Random ID 생성 */
export const generateRandomId = (length = 4) => {
  let result = '';
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
};
