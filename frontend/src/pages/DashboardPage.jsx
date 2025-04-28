import React from 'react'
import {motion, scale} from 'motion/react'
import {useAuthStore} from '../store/authStore'

const DashboardPage = () => {

  const {user} = useAuthStore();

  return (
    <motion.div
    initial={{opacity:0, scale:0.9}}
    animate={{opacity:1, scale:1}}
    exit={{opacity:0, scale:0.9}}
    transition={{duration:0.5}}

    className="max-w-md w-full mx-auto mt-10 p8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl border border-gray-800"
    >

    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to bg-emerald-600 text-transparent bg-clip-text">
      Dashboard
    </h2>

    <div className="space-y-6">
        <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.2}}
        className="text-xl bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
        >

        <h3 className="text-xl font-semibold text-green-400 mb-3">Profile Information</h3>
        <p className="text-gray-300">Name: {user.name} </p>
        <p className="text-gray-300">Email: {user.email} </p>
        
        </motion.div>
    </div>

    </motion.div>
  )
}

export default DashboardPage