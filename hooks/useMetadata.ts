import { useQuery } from "react-query";
import { createClient } from "@/prismicio";

export function useMetadata() {
  const client = createClient();
  return useQuery("metadata", async () => await client.getSingle("metadata"));
}
