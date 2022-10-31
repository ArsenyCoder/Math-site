
import logging

from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.message import ContentType

logging.basicConfig(level=logging.INFO)
BOT_TOKEN = '5154084615:AAHEwNqGi-lX6HFzoC-A76ETg_weahHDK5w'
PAYMENTS_TOKEN = '1744374395:TEST:bad36412416299df1890'

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(bot)

PRICE = types.LabeledPrice(label="Подписка на 1 месяц", amount=500*100)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await bot.send_message(message.chat.id, "/help - помощь, /start - начало, /buy - купить")

@dp.message_handler(commands=['buy'])
async def buy(message: types.Message):
    if PAYMENTS_TOKEN.split(':')[1] == 'TEST':
        await bot.send_message(message.chat.id, "Оплата занятия")

    await bot.send_invoice(message.chat.id,
                           title="Занятие",
                           description="Оплата за занятие",
                           provider_token=PAYMENTS_TOKEN,
                           currency="rub",
                           photo_url="https://arsenycoder.github.io/Math-site/book3.jpg",
                           is_flexible=False,
                           prices=[PRICE],
                           start_parameter="lesson_invoice",
                           payload="test-invoice-payload")
    
    
    
@dp.pre_checkout_query_handler(lambda query: True)
async def pre_checkout_query(pre_checkout_q: types.PreCheckoutQuery):
    await bot.answer_pre_checkout_query(pre_checkout_q.id, ok=True)

@dp.message_handler(content_types=ContentType.SUCCESSFUL_PAYMENT)
async def successful_payment(message: types.Message):
    print("SUCCESSFUL PAYMENT:")
    payment_info = message.successful_payment.to_python()
    for k, v in payment_info.items():
        print(f"{k} = {v}")

    await bot.send_message(message.chat.id,
                           f"Платеж на сумму {message.successful_payment.total_amount // 100} {message.successful_payment.currency} прошел успешно!!!")

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=False)
