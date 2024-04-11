import {useForm} from 'react-hook-form';
import {registerRequest} from '../model/auth.js';
import {useAuth} from '../controller/AuthContext.jsx';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function RegisterPage(){

    const {register, handleSubmit} = useForm();
    const {signup, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(isAuthenticated) navigate('/')
    }, [isAuthenticated]);
    return(
        <div className='bg-zinc-500 max-w-md p-10 rounded-md'>
            <form onSubmit={ handleSubmit(async (values ) => {
                signup(values);
            })}>
                <input type="text" {
                    ...register("nombre",{
                        required: {value: true, message: "Campo requerido"}
                        
                    })

                } 
                className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="text" 
                {
                    ...register("apellido",{
                        required: {value: true, message: "Campo requerido"}
                    })
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' />
                <input type="text" {
                    ...register("especialidad",{
                        required: {value: true, message: "Campo requerido"}
                    })
                } 
                className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="text" {
                    ...register("telefono",{
                        required: {value: true, message: "Campo requerido"}
                    })
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="text" {
                    ...register("email",{
                        required: {value: true, message: "Campo requerido"}
                    })
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="text" {
                    ...register("direccion_Consultorio",{
                        required: {value: true, message: "Campo requerido"}
                    })
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="text" {
                    ...register("ciudad",{
                        required: {value: true, message: "Campo requerido"}
                    })
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="date" {
                    ...register("nacimiento",{
                        required: {value: true, message: "Campo requerido"}
                    })
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="text" {
                    ...register("genero",{
                        required: {value: true, message: "Campo requerido"}
                    })
                
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' />
                <input type="password" {
                    ...register("password",{
                        required: {value: true, message: "Campo requerido"}
                    })
                
                } className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                />
                <input type="text" {
                    ...register("Número_de_matriculaMedica",{
                        required: {value: true, message: "Campo requerido"}
                    })
                
                
                }className='w-full bg-zinc-700 text-whitepx-4 py-2 rounded-md my-2' 
                 />

                <button type="submit">Registrar</button>
        

            </form> 
        </div>
    )
}

export default RegisterPage;