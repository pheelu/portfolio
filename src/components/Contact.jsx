import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-20 text-center text-4xl">Contact</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href ="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact