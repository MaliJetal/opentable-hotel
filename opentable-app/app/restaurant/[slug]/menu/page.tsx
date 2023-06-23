import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchItems = async (slug: any) => {
  const restauarnt = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restauarnt) {
    throw new Error();
  }
  return restauarnt.items;
};
export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchItems(params.slug);
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavbar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  );
}
