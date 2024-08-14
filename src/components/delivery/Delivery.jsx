import React from 'react'
import img1 from '../../assets/boy1.png'
import img2 from '../../assets/boy2.png'

const Delivery = () => {
    return (
        <div className="container w-10/12">
          <p className="text-[36px] text font-[700] mt-[-100px] mb-11">Доставка</p>
          <div className="grid gap-8 grid-cols-1  sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 mb-11">
            <div className="flex flex-col gap-7  sm:gap-5 sm:text-[15px] md:text-[16px]">
              <p>Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.</p>
              <p>
                Наше преимущество - фиксированная стоимость доставки по Беларуси.
                Такой приятной цены вы не найдете у транспортных компаний.{" "}
              </p>
              <p>
                Наше главное преимущество – работа сразу с двумя магазинами IKEA.
                Это дает большую вероятность того, что нужный вам товар будет в
                наличии.
              </p>
              <p>Наша задача – доставить заказ своевременно и без повреждений.</p>
              <p className="text-[18px] font-[700]">Как мы работаем?</p>
              <p>
                Мы закупаем выбранные вами товары в магазинах IKEA. После того как
                они прибывают на наши склады, мы начинаем доставлять их вам.
              </p>
              <p>
                Доставляем заказ до подъезда. Подъем на этаж согласовывается заранее
                с оператором и оплачивается отдельно. Для подъема крупногабаритных
                товаров вы должны найти помощника курьеру.
              </p>
              <p>Даты поставки указаны в календаре на главной странице сайта. </p>
              <img
                className="  mb-8 ml-[-100px] object-contain"
                src={img1}
                alt=""
              />
              <p className="text-[18px] font-[700]">
                Если некоторых позиций не оказалось в наличии
              </p>
              <p>
                Вы имеете право отказаться от какой-либо позиции в заказе, но при
                этом нами удерживается комиссия за доставку этого товара.
              </p>
              <p>
                Вы можете это сделать в течение 12 часов после оформления заказа
              </p>
              <p>
                Согласовывая доставку с оператором, вы обязуетесь ее принять. На
                каждую точку курьеру дается 10 мин. Если разгрузка не начинается в
                течение 5 мин с момента прибытия курьера к месту назначения, курьер
                следует дальше по маршруту. Все непринятые заказы отправляются на
                возврат в магазин IKEA. Чтобы получить непринятый заказ, вам
                необходимо еще раз его оформить на один из последующих рейсов. За
                нами остаётся право отказать вам в дальнейшем сотрудничестве..
              </p>
              <p>
                В течение часа проверьте комплектацию согласно акту сдачи-приемки
                услуг, а также каждую позицию на видимые повреждения и брак.
              </p>
            </div>
            <div className=" flex flex-col gap-7">
              <img className="h-[600px] object-contain" src={img2} alt="" />
              <p className="text-[18px] font-[700]">
                Доставка по Минску и Минскому р-ну
              </p>
              <p>
                Доставка по Минску осуществляется в течение 1-3 дней после поставки
                товаров на наш склад. За это время с вами связывается оператор и
                согласовывает комфортное для вас время получения заказа. В
                согласованный день курьер заранее уведомит о скором прибытии товара.{" "}
              </p>
              <p>
                Заказ будет доставлен в течение 1-5 рабочих дней после поставки
                товаров на наш склад. Вам позвонит оператор и согласует удобное для
                вас время. В день доставки курьер за час свяжется с вами и уведомит
                о точном времени прибытия товара.
              </p>
              <p className="text-[18px] font-[700]">Доставка по Беларуси</p>
              <p>
                Сборка и погрузка товаров осуществляется сотрудниками магазина IKEA.
                Поэтому точную информацию о наличии выкупленных товаров мы узнаем
                после разгрузки машины на нашем складе в Минске.{" "}
              </p>
              <p>
                Из-за отсутствия некоторых позиций итоговая сумма заказа может
                уменьшиться. Если сумма отсутствующих товаров в заказе превышает 4
                000 рос. руб, то комиссия за заказ будет пересчитана в соответствии
                с тарифами, которые указаны в разделе "Оплата".
              </p>
            </div>
          </div>
        </div>
      );
}

export default Delivery