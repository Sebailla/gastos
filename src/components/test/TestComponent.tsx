'use client'
import {Button, Icon, Avatar, Input} from "../../index"


//import { HeaderCard } from "../ui/cards/HeaderCard"
//import { FormField } from "../forms/FormField"
//import ThemeButtons, { ButtonColor } from "./ThemeButtons"
//import { useEffect, useRef, useState } from "react"


const TestComponent = () => {
    //const [theme, setTheme] = useState<ButtonColor>("rose") // 👈 estado global del componente
    //const passRef = useRef<HTMLInputElement>(null)

    /* useEffect(() => {
        passRef.current?.focus()
    }, [theme]) */

    return (
        <div className="container md:max-w-6xl flex flex-col justify-center items-center gap-5">

            <section>
                <Button className='' variant='success' onClick={() => alert('Primary Button Clicked!')}>
                    Success Button
                </Button>
                <Button variant="danger"  className="ml-4 mb-4" onClick={() => alert('Secondary Button Clicked!')}>
                    Danger Button
                </Button>
                <Button variant='ghost' className="ml-4">
                    Ghost Button
                </Button>
                <Button variant='ghost' className="ml-4" disabled>
                    Disabled Ghost Button
                </Button>
                <Button variant='icon' className="ml-4" >
                    <Icon name="search" size={24} />
                </Button>
                <Button variant='iconText' className="ml-4" >
                    <Icon name="user" size={16}/>
                    User
                </Button>

                <br />

                <Icon name="user" size={24} className="my-4" />
                
                <br />

                <Button className='mr-4 mb-4' color="base">
                    Color Base
                </Button>
                <Button className='mr-4 mb-4' color="yellow">
                    Color Yellow
                </Button>
                <Button className='mr-4' color="lira">
                    Color Lira
                </Button>
                <Button className='mr-4' color="sky">
                    Color Sky
                </Button>
                <Button className='mr-4' color="rose">
                    Color Rose
                </Button>
                <Button className='mr-4' color="green">
                    Color Green Apple
                </Button>
                <Button className='mr-4' color="red">
                    Color Red
                </Button>
                <Button className='mr-4' color="orange">
                    Color Orange
                </Button>
                
                <Button color='ghost' className="ml-4">
                    Ghost Button
                </Button>
                <Button variant='ghost' className="ml-4" disabled>
                    Disabled Ghost Button
                </Button>
                <Button variant='icon' color="yellow" className="ml-4" >
                    <Icon name="search" size={24} />
                </Button>
                <Button variant='iconText' color="rose" className="ml-4 mb-4">
                    <Icon name="user" size={16} />
                    User
                </Button>

                <br />

                <Input name="name" label="Nombre"/>

                
                <Avatar src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/330028997/original/9879e9c7c8dff0c83fc10a19b57668dda4eb12b6/design-your-avatar-vision-to-life.png" alt="User Avatar" className="ml-4 mb-4" />
            </section>


            {/* <h4 className="text-subTitle">Selecciona el tema</h4> */}

            {/* <ThemeButtons theme={theme} setTheme={setTheme} /> */}

            <h1 className="text-title-large text-center bg-background-nav p-4 mb-8">
                H1 - Bienvenidos a Personal Finance
            </h1>

            <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                {/* <HeaderCard title={'Sign Up'} color={theme} /> 

                <form className="flex flex-col gap-4 p-6" noValidate>
                    <FormField label={'Password'} type="password" name="password" id="password" color={theme} inputRef={passRef} />
                    <FormField label={'Confirm Password'} type="password" name="confirmPassword" id="confirmPassword" color={theme} />

                    <Button
                        className="btn-primary"
                        color={theme}
                        type="submit"
                        name="Sign Up"
                    />
                </form> */}

            </div>

            <h2 className="text-title">H2 - Título</h2>

            <h3 className="text-headline text-[#6e6e73] hover:font-semibold">
                H3 - HeadLine - #6e6e73
            </h3>
            <h3 className="text-headline">H3 - HeadLine</h3>

            <h4 className="text-subTitle">H4 - Sub-Title</h4>

            <p className="text-body">
                Body(p) - Texto principal, Crea un public carpeta en la raíz de su proyecto para <strong>(strong) - almacenar activos estáticos </strong>como imágenes, fuentes, etc. A continuación, el código puede hacer referencia a los archivos que contiene a partir de la URL base.public/
            </p>
            <span className="text-footnote">
                Nota al pie de pagina: <strong>Autor - </strong>Sebastian Illa
            </span>
        </div>
    )
}

export default TestComponent