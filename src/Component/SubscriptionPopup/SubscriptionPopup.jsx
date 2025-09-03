import { useEffect, useState } from "react";
import { Heart, X, User, Mail } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import useRoomsPromotions from "../../Actions/useRoomsPromotions";
import { Toaster } from "sonner";
import useValidationEmail from "../../Hooks/useValidationEmail";
import useForValuesEmail from "../../Hooks/useForValuesEmail";
import { Environment } from "../../Config/Config";

export default function SubscriptionPopup() {
   const [isOpen, setIsOpen] = useState(false);
   const {PostRoomEmail} =  useRoomsPromotions()
    const [formValues, handleChange] = useForValuesEmail();

    useEffect(() => {
      setIsOpen(true);
    }, []);

  const [formErrors, setFormErrors] = useState({});
  const validate =useValidationEmail()

  const handleSubmit = async(e) => {
          e.preventDefault();
          const errors = validate(formValues);
          setFormErrors(errors);
          console.log(Object.keys(errors))
          if (Object.keys(errors).length === 0) {
            PostRoomEmail({
              Email:formValues.email,
              Username:formValues.username,
              propertyID:Environment.propertyID
            })
            setIsOpen(false)
          }     
      
      };


  return (
    <AnimatePresence>
      <Toaster richColors />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-pink-100 rounded-2xl shadow-lg max-w-sm w-full p-6 text-center"
          >
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <form  onSubmit={handleSubmit}>
                <div className="relative w-full max-w-md bg-gradient-to-br from-pink-200 to-red-200 rounded-3xl p-8 shadow-2xl overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-400 rounded-full opacity-80"></div>
                    <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-red-400 rounded-full opacity-60"></div>
                   <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center 
                                text-red-700 hover:bg-red-300 rounded-full transition-colors z-10"
                    >
                    <X size={20} />
                    </button>
                    <div className="relative mb-6">
                    <Heart className="w-16 h-16 text-red-500 fill-current" />
                    </div>
                    <div className="relative z-10 mb-8">
                    <h1 className="text-[15px] font-bold md:text-[20px] text-red-700 mb-4 leading-tight">
                        Suscríbete y disfruta de un 10% de descuento por reservas directas durante septiembre
                    </h1>
                    <p className="text-red-600 text-lg">
                        Conmemoramos el mes del amor y la amistad
                    </p>
                    </div>
                    <div className="relative z-10 space-y-6">

                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600 w-5 h-5" />
                        <input
                        type="text"
                        name="username"
                        placeholder="Su nombre..."
                        value={formValues.username}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-transparent border-0 border-b-2 border-red-400 text-red-700 placeholder-red-500 focus:outline-none focus:border-red-600 transition-colors text-lg"
                        />
                    </div>
                      {formErrors.username && (
                        <p className="text-red-600 text-sm mt-1">{formErrors.username}</p>
                      )}
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600 w-5 h-5" />
                        <input
                        type="email"
                        name="email"
                        placeholder="Su e-mail..."
                        value={formValues.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-transparent border-0 border-b-2 border-red-400 text-red-700 placeholder-red-500 focus:outline-none focus:border-red-600 transition-colors text-lg"
                        />
                    </div>
                    {formErrors.username && (
                        <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
                      )}
                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mt-8 cursor-pointer">
                        <span className="text-xl">▷</span>
                        SUSCRIBIRSE
                    </button>
                    </div>

                    <div className="absolute bottom-4 right-4">
                    <Heart className="w-12 h-12 text-red-400 fill-current opacity-70" />
                    </div>
                </div>
                </form>
                </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}