import { baseApiUrl } from 'config';
import { IProducts } from 'types';

async function fetchProducts(url: string) {
  const response = await fetch(url + '/api/products');
  return (await response.json()) as Promise<IProducts>;
}

export function return_url() {
  return baseApiUrl;
}

export async function getCategories(url: string) {
  const products = await fetchProducts(url);
  const categories = products.map((product) => product.category);
  return Array.from(new Set(categories));
}

export async function getProductIds(url: string) {
  const products = await fetchProducts(url);
  return products.map((product) => `${product.id}`);
}
export async function getProductPaths(url: string) {
  const products = await fetchProducts(url);
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function getProductBySlug(slug: string, url: string) {
  const products = await fetchProducts(url);
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(category: string, url: string) {
  const products = await fetchProducts(url);
  return products.filter((product) => product.category === category);
}
