import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { links } from '~/utils/constants';

export function Footer() {
  return (
    <footer className="w-full rotate-180 bg-white shadow">
      <div className="flex rotate-180 flex-col-reverse items-center justify-between p-16 pb-8 pt-4 md:flex-row">
        <Link to="/" className="mt-6 md:mr-5 md:mt-0">
          <img
            src="/new-logo.png"
            alt="Logo"
            className="max-w-60 contain-content md:max-w-60"
          />
        </Link>

        <nav className="hidden flex-col space-y-2 lg:flex">
          {links.map((link, index) => (
            <motion.div
              initial={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <Link
                to={link.url}
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex flex-1 flex-col gap-1 md:flex-none">
          <div className="flex gap-2">
            <p className="text-sm text-gray-700 md:text-base">Endereço:</p>
            <p className="text-sm md:text-base">
              Av Alvaro Ramos 1342/1352 - Quarta Parada - São Paulo
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-gray-700 md:text-base">Telefone:</p>
            <a
              href="tel:+551126018186"
              className="text-sm text-blue-800 md:text-base"
            >
              (11) 2601-8186
            </a>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-gray-700 md:text-base">Email:</p>
            <a
              href="mailto:kanap@kanap.com"
              className="text-sm text-blue-800 md:text-base"
            >
              Klanap@klanap.com.br{' '}
            </a>
          </div>
        </div>

        <Link to="/" className="mr-5 hidden md:m-0 lg:flex">
          <img
            src="/old-logo.png"
            alt="Logo"
            className="max-w-60 contain-content"
          />
        </Link>
      </div>
    </footer>
  );
}
