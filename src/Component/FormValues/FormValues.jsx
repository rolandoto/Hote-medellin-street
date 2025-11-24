import {Button} from "@nextui-org/react";
import pdf from "../../Image/contracto.pdf"
import { ShieldCheck } from "lucide-react";

const FormValues =({handleSubmit,formErrors,handleChange,formValues,loading})  =>{

    return (<form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                name="name"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Nombre"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Apellido</label>
                            <input
                                name="apellido"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Apellido"
                                value={formValues.apellido}
                                onChange={handleChange}
                            />
                            {formErrors.apellido && <p className="text-red-500 text-xs">{formErrors.apellido}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                name="email"
                            
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                            <input
                                name="phone"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Número de teléfono"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                            {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}
                        </div>
                        
                    </div>
                <div>
                    </div>
                    <div className=" mx-auto  rounded-md ">
                        <div className="mb-4 mt-5">
                        <h2 className="text-xl font-semibold">Método de Pago</h2>
                        </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Titular de la tarjeta (obligatorio)
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="cardName"
                                value={formValues.cardName}
                                onChange={handleChange}
                                type="text" 
                                placeholder="Titular de la tarjeta (obligatorio)" 
                            />
                            {formErrors.cardName && <p className="text-red-500 text-xs">{formErrors.cardName}</p>}
                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Número de la tarjeta (obligatorio)
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="cardNumber"
                                value={formValues.cardNumber}
                                onChange={handleChange}
                                type="text" 
                                placeholder="5306 9172 2567 9369" 
                            />
                                {formErrors.cardNumber && <p className="text-red-500 text-xs">{formErrors.cardNumber}</p>}
                            </div>
                            <div className="flex space-x-2 mb-4">
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Expira el
                                </label>
                                <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="expiryMonth"
                                value={formValues.expiryMonth}
                                onChange={handleChange}
                                >
                                <option value={""} >Mes</option>
                                {[...Array(12).keys()].map(month => {
                                const monthValue = (month + 1).toString().padStart(2, '0');
                                return (
                                    <option key={monthValue} value={monthValue}>
                                    {monthValue}
                                    </option>
                                );
                                })}
                                </select>
                                {formErrors.expiryMonth && <p className="text-red-500 text-xs">{formErrors.expiryMonth}</p>}
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryYear">
                                Año
                                </label>
                                <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name='expiryYear'
                                value={formValues.expiryYear}
                                onChange={handleChange}
                                >
                                    <option value={""} >Año</option>
                                    {[...Array(13).keys()].map(year => {
                                    const yearValue = 23 + year; // Años del 2024 al 2036
                                    return (
                                    <option key={`year-${yearValue}`} value={yearValue}>
                                        {yearValue}
                                    </option>
                                    );
                                })}
                                </select>
                                {formErrors.expiryYear && <p className="text-red-500 text-xs">{formErrors.expiryYear}</p>}
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                                CVC
                                </label>
                                <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                type="text" 
                                name='cvc'
                                value={formValues.cvc}
                                onChange={handleChange}
                                placeholder="123" 
                                />
                                {formErrors.cvc && <p className="text-red-500 text-xs">{formErrors.cvc}</p>}
                            </div>
                            </div>
                            <div className="mb-4">
                            <label className="flex items-center">
                                <input 
                                name='termsAccepted'
                                value={formValues.termsAccepted}
                                onChange={handleChange}
                                type="checkbox" 
                            
                                className="form-checkbox h-5 w-5 text-gray-600"
                                />
                                <span className="ml-2 text-gray-700">He leído y acepto las <a target="_blank" href={pdf} className="text-black">condiciones generales</a> (*)</span>
                            </label>
                            {formErrors.termsAccepted && <p className="text-red-500 text-xs">{formErrors.termsAccepted}</p>}
                            </div>
                            <div className="mb-4">
                            <label className="flex items-center">
                                <input 
                                name='siteTermsAccepted'
                                value={formValues.siteTermsAccepted}
                                onChange={handleChange}
                                type="checkbox" 
                                className="form-checkbox h-5 w-5 text-gray-600"
                                />
                                <span className="ml-2 text-gray-700">He leído y acepto los <a  target="_blank" href={pdf} className="text-black">Términos y Condiciones del sitio web</a> (*)</span>
                            </label>
                            {formErrors.siteTermsAccepted && <p className="text-red-500 text-xs">{formErrors.siteTermsAccepted}</p>}
                            </div>
                            <Button 
                            disabled={loading} 
                            type="submit" 
                            className={`w-full text-white py-2 bg-black px-4 rounded hover:bg-gray-800`} 
                            >
                            {loading ? "Cargando reserva" : "Finaliza tu reserva" } 
                            </Button>
                            <p className=" text-xs text-gray-500 mt-4">
                            Al completar esta reserva, acuerdo que he leído y aceptado las <a target="_blank" href={pdf} className="text-black">Políticas de Propiedad</a>.
                            </p>

                            <div className="text-center mt-7 text-gray-600 text-sm">
                                <p className="flex justify-center items-center gap-2 mt-2 text-gray-600 ">
                                <ShieldCheck size={16} />
                                  Pagos  seguros por <span className="text-2xl font-semibold"> <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA5MiAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjExMjggMi4zMTcxNUMyNC45MTM4IDIuMTQ2MjcgMjUuNzI0OCAyLjA2MDgzIDI2LjU0NTkgMi4wNjA4M0MyNy4zODY5IDIuMDYwODMgMjguMTk3OSAyLjE0NjI3IDI4Ljk3ODkgMi4zMTcxNUwyMy44MTI0IDIxLjAyODVDMjIuOTExMyAyMS4xODA0IDIyLjAzMDIgMjEuMjU2NCAyMS4xNjkxIDIxLjI1NjRDMjAuMzg4MiAyMS4yNTY0IDE5LjQ5NzEgMjEuMTgwNCAxOC40OTU4IDIxLjAyODVMMTQuODkxMyA4LjQ2ODgzTDExLjIyNjcgMjEuMDI4NUMxMC4zMjU2IDIxLjE4MDQgOS40NjQ1MyAyMS4yNTY0IDguNjQzNTEgMjEuMjU2NEM3Ljg2MjUzIDIxLjI1NjQgNi45NzE0MiAyMS4xODA0IDUuOTcwMTcgMjEuMDI4NUwwLjc3MzY4MiAyLjMxNzE1QzEuNTk0NzEgMi4xNDYyNyAyLjQwNTcyIDIuMDYwODMgMy4yMDY3MiAyLjA2MDgzQzQuMDI3NzQgMi4wNjA4MyA0LjgzODc2IDIuMTQ2MjcgNS42Mzk3NiAyLjMxNzE1TDkuMDAzOTYgMTUuNTAzNEwxMi4yNDggMi4zMTcxNUMxMy4wODkxIDIuMTQ2MjcgMTMuOTcwMiAyLjA2MDgzIDE0Ljg5MTMgMi4wNjA4M0MxNS44MTI1IDIuMDYwODMgMTYuNjczNSAyLjE0NjI3IDE3LjQ3NDUgMi4zMTcxNUwyMS4zNzk0IDE1LjU2MDRMMjQuMTEyOCAyLjMxNzE1WiIgZmlsbD0iIzQ2NDY0NiIvPgo8cGF0aCBkPSJNMzUuOTg2NiAyMS4yODQ4QzM0LjQwNDYgMjEuMjg0OCAzMy4wMjI5IDIwLjk4MSAzMS44NDE0IDIwLjM3MzVDMzAuNjU5OSAxOS43NjU5IDI5Ljc0ODggMTguOTAyIDI5LjEwOCAxNy43ODE4QzI4LjQ2NzIgMTYuNjQyNiAyOC4xNDY4IDE1LjMzMjUgMjguMTQ2OCAxMy44NTE2QzI4LjE0NjggMTIuMzUxNiAyOC40NzcyIDExLjA1MSAyOS4xMzggOS45NDk3OUMyOS43OTg4IDguODI5NTggMzAuNzIgNy45NjU2OSAzMS45MDE1IDcuMzU4MTFDMzMuMTAzIDYuNzUwNTQgMzQuNDY0NyA2LjQ0Njc1IDM1Ljk4NjYgNi40NDY3NUMzNy41Njg1IDYuNDQ2NzUgMzguOTUwMyA2Ljc2MDAzIDQwLjEzMTcgNy4zODY1OUM0MS4zMTMyIDcuOTk0MTcgNDIuMjI0MyA4Ljg1ODA2IDQyLjg2NTEgOS45NzgyN0M0My41MDU5IDExLjA5ODUgNDMuODI2MyAxMi4zODk2IDQzLjgyNjMgMTMuODUxNkM0My44MjYzIDE1LjM3MDUgNDMuNTA1OSAxNi42OTAxIDQyLjg2NTEgMTcuODEwM0M0Mi4yMjQzIDE4LjkzMDUgNDEuMzEzMiAxOS43OTQ0IDQwLjEzMTcgMjAuNDAyQzM4Ljk1MDMgMjAuOTkwNSAzNy41Njg1IDIxLjI4NDggMzUuOTg2NiAyMS4yODQ4Wk0zNS45ODY2IDE3LjU4MjRDMzcuMDQ3OSAxNy41ODI0IDM3Ljg1ODkgMTcuMjY5MiAzOC40MTk2IDE2LjY0MjZDMzkuMDAwMyAxNS45OTcgMzkuMjkwNyAxNS4wNjY3IDM5LjI5MDcgMTMuODUxNkMzOS4yOTA3IDEyLjY3NDQgMzkuMDAwMyAxMS43NjMgMzguNDE5NiAxMS4xMTc1QzM3LjgzODkgMTAuNDcxOSAzNy4wMjc5IDEwLjE0OTIgMzUuOTg2NiAxMC4xNDkyQzM0Ljk2NTMgMTAuMTQ5MiAzNC4xNTQzIDEwLjQ4MTQgMzMuNTUzNSAxMS4xNDZDMzIuOTcyOCAxMS43OTE1IDMyLjY4MjQgMTIuNjkzNCAzMi42ODI0IDEzLjg1MTZDMzIuNjgyNCAxNS4wNjY3IDMyLjk3MjggMTUuOTk3IDMzLjU1MzUgMTYuNjQyNkMzNC4xMzQyIDE3LjI2OTIgMzQuOTQ1MyAxNy41ODI0IDM1Ljk4NjYgMTcuNTgyNFoiIGZpbGw9IiM0NjQ2NDYiLz4KPHBhdGggZD0iTTYyLjMzMDYgNi40NzUyM0M2NC4wMTI3IDYuNDc1MjMgNjUuNDA0NSA2Ljg3Mzk1IDY2LjUwNTggNy42NzEzOUM2Ny42MDcyIDguNDY4ODMgNjguMTU3OSA5LjUzMjA5IDY4LjE1NzkgMTAuODYxMlYyMUg2My42ODIzVjEyLjM3MDZDNjMuNjgyMyAxMS42MzAxIDYzLjQzMiAxMS4wNyA2Mi45MzE0IDEwLjY5MDNDNjIuNDUwOCAxMC4yOTE2IDYxLjc1OTkgMTAuMDkyMiA2MC44NTg4IDEwLjA5MjJDNjAuMDU3OCAxMC4wOTIyIDU5LjI4NjggMTAuMjM0NiA1OC41NDU5IDEwLjUxOTRDNTguNzg2MiAxMS4xNDYgNTguOTA2NCAxMS44Mjk1IDU4LjkwNjQgMTIuNTdWMjFINTQuNDMwOFYxMi4zNzA2QzU0LjQzMDggMTEuNjMwMSA1NC4xODA1IDExLjA3IDUzLjY3OTggMTAuNjkwM0M1My4xOTkyIDEwLjI5MTYgNTIuNTA4NCAxMC4wOTIyIDUxLjYwNzIgMTAuMDkyMkM1MC45MjY0IDEwLjA5MjIgNTAuMjg1NiAxMC4xNjgxIDQ5LjY4NDggMTAuMzJWMjFINDUuMTQ5Mkw0NS4xNzkyIDguMzI2NDNDNDYuMDYwMyA3LjczNzg1IDQ3LjE0MTcgNy4yODIxNyA0OC40MjMzIDYuOTU5MzlDNDkuNzA0OSA2LjYzNjYyIDUwLjk1NjQgNi40NzUyMyA1Mi4xNzggNi40NzUyM0M1My4wOTkxIDYuNDc1MjMgNTMuOTYwMiA2LjYxNzYzIDU0Ljc2MTIgNi45MDI0M0M1NS41NjIyIDcuMTY4MjUgNTYuMjYzMSA3LjU0Nzk4IDU2Ljg2MzggOC4wNDE2M0M1Ny42NDQ4IDcuNTY2OTcgNTguNTI1OSA3LjE4NzIzIDU5LjUwNzEgNi45MDI0M0M2MC40ODgzIDYuNjE3NjMgNjEuNDI5NSA2LjQ3NTIzIDYyLjMzMDYgNi40NzUyM1oiIGZpbGw9IiM0NjQ2NDYiLz4KPHBhdGggZD0iTTc2Ljg4NDMgNi40NzUyM0M3OS42Mjc3IDYuNDc1MjMgODEuNzcwNCA3LjE1ODc1IDgzLjMxMjMgOC41MjU3OUM4NC44NzQzIDkuODkyODMgODUuNjU1MiAxMS44Mjk1IDg1LjY1NTIgMTQuMzM1N0M4NS42NTUyIDE2LjQwNTMgODUuMTE0NiAxOC4wODU2IDg0LjAzMzIgMTkuMzc2N0M4Mi45NzE5IDIwLjY0ODggODEuMzU5OSAyMS4yODQ4IDc5LjE5NzIgMjEuMjg0OEM3OC40OTYzIDIxLjI4NDggNzcuNzg1NCAyMS4xODA0IDc3LjA2NDUgMjAuOTcxNkM3Ni4zNDM2IDIwLjc0MzcgNzUuNjcyOCAyMC40MzA0IDc1LjA1MiAyMC4wMzE3VjI1LjMwMDVDNzQuNTcxNCAyNS42NjEzIDczLjg1MDUgMjUuOTg0IDcyLjg4OTMgMjYuMjY4OEM3MS45NDgxIDI2LjU1MzYgNzEuMTU3MSAyNi42OTYgNzAuNTE2MyAyNi42OTZWNy41ODU5NUM3MS4yNzczIDcuMjQ0MTkgNzIuMjE4NCA2Ljk3ODM4IDczLjMzOTggNi43ODg1MUM3NC40ODEzIDYuNTc5NjYgNzUuNjYyOCA2LjQ3NTIzIDc2Ljg4NDMgNi40NzUyM1pNNzcuMjc0OCAxNy42OTY0Qzc4LjUzNjMgMTcuNjk2NCA3OS40OTc1IDE3LjM5MjYgODAuMTU4NCAxNi43ODVDODAuODE5MiAxNi4xNzc0IDgxLjE0OTYgMTUuMTkwMSA4MS4xNDk2IDEzLjgyMzFDODEuMTQ5NiAxMi42ODM5IDgwLjgwOTIgMTEuNzQ0IDgwLjEyODMgMTEuMDAzNkM3OS40Njc1IDEwLjI2MzEgNzguNDc2MyA5Ljg5MjgzIDc3LjE1NDYgOS44OTI4M0M3Ni40OTM4IDkuODkyODMgNzUuNzkyOSA5Ljk0OTc5IDc1LjA1MiAxMC4wNjM3VjE3LjQ5N0M3NS43NTI5IDE3LjYyOTkgNzYuNDkzOCAxNy42OTY0IDc3LjI3NDggMTcuNjk2NFoiIGZpbGw9IiM0NjQ2NDYiLz4KPHBhdGggZD0iTTg5LjUxMjIgNC41NjcwN0M4OC44NzE0IDQuNTY3MDcgODguMzIwOCA0LjM1ODIyIDg3Ljg2MDIgMy45NDA1MUM4Ny40MTk2IDMuNTAzODIgODcuMTk5MyAyLjk4MTY4IDg3LjE5OTMgMi4zNzQxMUM4Ny4xOTkzIDEuNzY2NTQgODcuNDI5NiAxLjI1MzkgODcuODkwMiAwLjgzNjE5M0M4OC4zNTA4IDAuMzk5NDk5IDg4Ljg5MTUgMC4xODExNTIgODkuNTEyMiAwLjE4MTE1MkM5MC4xNTMgMC4xODExNTIgOTAuNzAzNyAwLjM5OTQ5OSA5MS4xNjQzIDAuODM2MTkzQzkxLjYyNDkgMS4yNTM5IDkxLjg1NTIgMS43NjY1NCA5MS44NTUyIDIuMzc0MTFDOTEuODU1MiAyLjk2MjcgOTEuNjI0OSAzLjQ3NTM0IDkxLjE2NDMgMy45MTIwM0M5MC43MDM3IDQuMzQ4NzMgOTAuMTUzIDQuNTY3MDcgODkuNTEyMiA0LjU2NzA3Wk04Ny4yNTk0IDYuODczOTVDODcuOTIwMyA2LjYwODE0IDg4LjY4MTIgNi40NzUyMyA4OS41NDIzIDYuNDc1MjNDOTAuMzgzMyA2LjQ3NTIzIDkxLjEzNDMgNi42MDgxNCA5MS43OTUxIDYuODczOTVWMjFIODcuMjU5NFY2Ljg3Mzk1WiIgZmlsbD0iIzQ2NDY0NiIvPgo8cGF0aCBkPSJNNS4yMjgyNyAyOC41Mjc5VjI1LjYwMTZDNS4yMjgyNyAyNS4zMDc3IDUuNDQ1MTUgMjUuMDU1NCA1Ljc1MDA0IDI1LjAwMjNDNy4yNTY4MSAyNC43Mzk5IDExLjc0NDggMjQuMDE3MSAxNS40NzA1IDI0LjAxNzFDMTkuMjA1NCAyNC4wMTcxIDIzLjgxNTcgMjQuNzQzNCAyNS4zNTA4IDI1LjAwNDNDMjUuNjU3MiAyNS4wNTYzIDI1Ljg3NTQgMjUuMzA5MiAyNS44NzU0IDI1LjYwNDNWMjguNTQzMUMyNS44NzU0IDI4Ljk2NzkgMjUuNDMgMjkuMjgxIDI0Ljk5NDMgMjkuMTgyNEMyMy41OTQ1IDI4Ljg2NTUgMjAuNDk1IDI4LjMzMzIgMTUuNDcwNSAyOC4zMzMyQzEwLjUwNTYgMjguMzMzMiA3LjQ5ODYyIDI4Ljg1MyA2LjEyMzQ4IDI5LjE3MUM1LjY4MzkxIDI5LjI3MjcgNS4yMjgyNyAyOC45NTY5IDUuMjI4MjcgMjguNTI3OVoiIGZpbGw9IiM0NjQ2NDYiLz4KPC9zdmc+Cg==" alt="wompi" /> </span>
                                </p>
                                <div className="flex justify-center gap-4 mt-1">
                                    <a target="_blank" href="https://wompi.com/assets/downloadble/autorizacion-administracion-datos-personales.pdf" className="hover:underline">Autorización de datos personales</a>
                                    <a target="_blank" href="https://wompi.com/assets/downloadble/reglamento-Usuarios-Colombia.pdf"   className="hover:underline">Políticas de pagos</a>
                                </div>
                                </div>
                        </div>
                    </form>)

}

export default FormValues