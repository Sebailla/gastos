import Button from "../atoms/Button"


export const LoginTemplate = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center h-auto p-3 md:p-10 m-5 md:m-10 border border-gray-100 rounded-lg shadow-lg">
                <span className="text-footnote text-gray-subtitle">
                    Versión 1.0
                </span>
                <section className="mt-20">
                    <img src="" alt="" />
                </section>
                <h1 className="text-title-large">
                    Control de Gastos
                </h1>
                <p className="text-headline text-gray-subtitle text-center mt-4 anim-tracking-in-expand-forward-top">
                    Toma el control de tus Ingresos y Gastos
                </p>
                <Button type="submit" className="mt-10 gap-10 w-full" color="green">
                    Login
                </Button>
            </div>
        </div>

    )
}
