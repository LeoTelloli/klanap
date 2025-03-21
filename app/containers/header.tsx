import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { links } from '~/utils/constants';
import { HamburgerNav } from './hamburguer-nav';

export function Header() {
  return (
    <header className="fixed z-50 flex h-24 w-full items-center justify-between bg-black px-10 shadow">
      <Link to="/">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-24 w-24"
          height={96}
          width={96}
        />
      </Link>

      <nav className="hidden space-x-8 md:flex">
        {links.map((link, index) => (
          <motion.div
            initial={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            key={index}
          >
            <Link
              to={link.url}
              className="text-gray-50 hover:text-gray-400 hover:underline"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </nav>

      <nav className="md:hidden">
        <HamburgerNav />
      </nav>

      <div className="hidden flex-col gap-1 md:flex">
        <div className="flex gap-2">
          <p className="text-sm text-orange-500 md:text-base">Telefone:</p>
          <a
            href="tel:+551126018186"
            className="text-sm text-gray-50 md:text-base"
          >
            (11) 2601-8186
          </a>
        </div>
        <div className="flex gap-2">
          <p className="text-sm text-orange-500 md:text-base">Email:</p>
          <a
            href="mailto:kanap@kanap.com"
            className="text-sm text-gray-50 md:text-base"
          >
            Klanap@klanap.com.br{' '}
          </a>
        </div>
      </div>
    </header>
  );
}
