import Button from "../atoms/Button"
import { Icon } from "../atoms/Icon"
import Key2 from "../atoms/Key2"
//import { Icon } from "../atoms/Icon"


export const LoginTemplate = () => {
    return (
        <div className="mb-10">
            <span className="text-footnote">
                Versión 1.0
            </span>
            <section className="mt-20">
                <img src="" alt="" />
            </section>
            <h1 className="text-title-large">
                Control de Gastos
            </h1>
            <p className="text-headline text-gray-subtitle mt-4">
                Toma el control de tus Ingresos y Gastos
            </p>
            <Button variant="iconText" className="my-10 gap-4" color="green">
                {/* <Icon name="login" size={24} /> */}
                <Icon name="loginuser" size={24}/>
                <Key2 size={24}/>
                {/* <p className="text-xl">􂏹</p>  */}
                Login
            </Button>
        </div>
    )
}
