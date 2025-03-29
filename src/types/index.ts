export type DomainProduct = {
    id: number;
    domain_name: string;
    price: number;
};
export type HostingProduct = {
  id: number;
  plan: string;
  price: number;
  disk_space: string;
  bandwidth: string;
  accounts_ftp: number;
  addon_domains: number;
  sub_domains: number;
  created_at: string;
  updated_at: string; 
};
export type VpsProduct = {
  id: number;
  price: number;
  plan: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  os: string;
  created_at: string;
  updated_at: string; 
}
export type Discount = {
  id: string;
  percentage: number;
  expiry_date: string;
  discount_type: string;
  created_at: string; 
  updated_at: string;
};
export type Error = {
  status : string,
  message : string
}