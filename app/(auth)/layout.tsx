import Image from "next/image"
export default function AuthLayout({children}: Readonly<{
    children:React.ReactNode
}>){
    return (
        <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
            <div className="place-content-center place-self-center">
                <Image src="../Oxxo_Logo.svg" alt="Logo" width={100} className="place-self-center" height={0} />
                {children}
            </div>
        </div>
    );
}