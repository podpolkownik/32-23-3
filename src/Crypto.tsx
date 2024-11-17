import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const Crypto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <article className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <motion.header 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 leading-tight tracking-wide">
            Секрет, Который Помог Мне Забыть о Геморрое Раз и Навсегда!
          </h1>
        </motion.header>

        <motion.div 
          className="relative h-64 rounded-xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://sun9-15.userapi.com/impg/wiaIzoYHfAd4QygvWR1Fpvp9WABTTLTJ2DTT9g/kIGL6gRFbeM.jpg?size=1024x1024&quality=96&sign=70b933a0e3c1d9d2d2a019a507b611fc&type=album"
            alt="Treatment Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        <motion.section 
          className="bg-white rounded-xl p-6 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Начало проблемы</h2>
          <p className="text-gray-700 leading-relaxed">
            Всё началось неожиданно: сначала лёгкий дискомфорт перерос в постоянную боль, которая стала влиять на каждый аспект моей жизни. Простые действия превратились в настоящее испытание.
          </p>
        </motion.section>

        <motion.section 
          className="bg-white rounded-xl p-6 shadow-lg"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Борьба с проблемой</h2>
          <p className="text-gray-700 leading-relaxed">
            Я перепробовала множество средств: мази, таблетки, народные методы. Ничего не помогало надолго, пока врач не порекомендовал Vitacaps. Сначала я сомневалась, но решила рискнуть.
          </p>
        </motion.section>

        <motion.section 
          className="bg-white rounded-xl p-6 shadow-lg"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Результат</h2>
          <p className="text-gray-700 leading-relaxed">
            Через неделю приёма Vitacaps боль начала отступать. Спустя две недели я вернулась к нормальной жизни: снова могла заниматься спортом, встречаться с друзьями и просто наслаждаться каждым днём.
          </p>
        </motion.section>

        <motion.footer 
          className="bg-blue-900 text-white rounded-xl p-6 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg font-medium">
            Не позволяйте боли контролировать вашу жизнь. Vitacaps может стать вашим решением, как стал моим. Начните свой путь к здоровью сегодня.
          </p>
        </motion.footer>
      </article>
    </div>
  );
};

export default Crypto;
