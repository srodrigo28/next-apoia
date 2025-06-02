export function createSlug(username: string): string {
    return username
    .normalize('NFD') // Decopõe caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
    .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hifens
    .replace(/-+/g, '-') // Remove hifens duplicados
    .toUpperCase() // Converte para maiúsculas 
    .toLowerCase() // Converte para minúsculas 
    .trim(); // Remove espaços no inicio e fim
}