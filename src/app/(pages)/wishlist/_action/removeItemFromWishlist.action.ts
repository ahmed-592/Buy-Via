'use server'
import { getUserToken } from "@/Helpers/accessToken";




export async function removeItemFromWishlist(id: string) {
const token = await getUserToken();
const res = await fetch(
        `${process.env.URL_API}/wishlist/${id}`,
        {
          method: "DELETE",
          headers: { token: token + '', "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      return data;
    }