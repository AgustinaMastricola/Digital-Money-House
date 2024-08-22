"use client";
import Footer from "@/components/common/footer/Footer";
import HomeAnauthenticated from "@/components/home/anauthenticated/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/authenticated/HomeAuthenticated";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const { data: session, status, update } = useSession();
	const router = useRouter();

	useEffect(() => {
    if(!session?.user.token){
      router.refresh()
      update
    }
		if (status === "unauthenticated") {
			router.push("/");
		}
	}, [status, router]);

	return (
		<>
			{status === "authenticated" ? (
				<HomeAuthenticated />
			) :
      status === "loading" ? 
      (<></>)
      : (
				<HomeAnauthenticated />
			)}
			<Footer
				styleContainer="bg-total-black"
				styleParagraph="text-total-primary"
			/>
		</>
	);
}
