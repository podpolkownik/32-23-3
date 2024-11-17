import React from 'react';
import { motion } from 'framer-motion';
import { FaRegSmileBeam, FaRegFrown, FaRegLightbulb, FaRegHeart } from 'react-icons/fa';

const Crypto = () => {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-10">
        <motion.h1
          className="text-5xl font-extrabold mb-8 text-center text-blue-900 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FaRegSmileBeam className="inline-block mr-2 text-yellow-500" />
          Секрет, Который Помог Мне Забыть о Геморрое Раз и Навсегда!
        </motion.h1>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="https://sun9-15.userapi.com/impg/wiaIzoYHfAd4QygvWR1Fpvp9WABTTLTJ2DTT9g/kIGL6gRFbeM.jpg?size=1024x1024&quality=96&sign=70b933a0e3c1d9d2d2a019a507b611fc&type=album"
            alt="Bitcoin Growth"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaRegFrown className="inline-block mr-2 text-red-500" />
            Когда это только началось...
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Долгое время я даже не подозревала, что эта проблема может так испортить жизнь. Геморрой казался чем-то далёким...
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaRegFrown className="inline-block mr-2 text-red-500" />
            Ощущения, которые меня пугали
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Каждое утро я просыпалась с мыслью о предстоящей боли...
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaRegHeart className="inline-block mr-2 text-pink-500" />
            Со временем всё только ухудшалось
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Боль стала постоянной. Я перестала встречаться с друзьями...
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaRegLightbulb className="inline-block mr-2 text-yellow-400" />
            Все мои попытки избавиться от проблемы
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Я пробовала всё: мази, таблетки, народные средства...
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaRegLightbulb className="inline-block mr-2 text-yellow-400" />
            Мой последний шанс и неожиданное открытие
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            На приёме врач порекомендовал мне Vitacaps...
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaRegSmileBeam className="inline-block mr-2 text-yellow-500" />
            Возвращение к нормальной жизни
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Через пару недель я смогла спокойно посидеть без страха боли...
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaRegSmileBeam className="inline-block mr-2 text-yellow-500" />
            Мой совет для тех, кто страдает
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Если вы сейчас в похожей ситуации — не ждите...
          </motion.p>
        </motion.section>

        <footer className="mt-10 border-t pt-6 text-lg text-center text-gray-600">
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Если вы столкнулись с подобной проблемой, не откладывайте решение...
          </motion.p>
        </footer>
      </article>
    </div>
  );
};

export default Crypto;
