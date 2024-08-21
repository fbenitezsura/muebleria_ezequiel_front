import Button from '@modules/common/components/button/index';

const AboutUs = () => {

    return (
        <div className="mt-[20px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:px-[20px]">
                <img className="h-full" src="/img/Team.jpg" />
            </div>
            <div className="col-span-12 md:col-span-6 md:px-[50px] text-center">
                <p className="mt-5">TEAM {process.env.NEXT_PUBLIC_NAME_ECOMMERCE}</p>
                <h2 className="mt-6 text-2xl font-bold">Redefiniendo el Concepto de Diseño Inmobiliario</h2>                
                <p className="mt-5"><strong>Nuestra misión</strong>: Proveer soluciones de diseño inmobiliario únicas y funcionales, cumpliendo con las necesidades y preferencias de cada cliente.</p>
                <Button className="mt-5 btn-secondary">Leer más sobre {process.env.NEXT_PUBLIC_NAME_ECOMMERCE}</Button>
            </div>           
        </div>
    )
}

export default AboutUs;