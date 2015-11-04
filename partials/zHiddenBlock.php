<div class="zHiddenBlock">

    <div class="call-back">
        <div id="call-popup">
            <div class="call-popup">
                <p>Заказать обратный звонок</p>
                <form action="ajax.php" method="post" class="call-form">
                    <div class="input-wrap name">
                        <input type="text" name="name" placeholder="Ваше имя" required="required"/>
                    </div>
                    <div class="input-wrap phone">
                        <input type="text" name="phone" placeholder="Ваш контакный телефон" required="required"/>
                    </div>
                    <div class="input-wrap time">
                        <select class="input-wrap time-pick">
                            <option value="time-now">Позвонить сейчас</option>
                            <option value="time-15">Через 15 минут</option>
                            <option value="time-30">Через 30 минут</option>
                            <option value="time-1h">Через 1 час </option>
                            <option value="time-choose">Указать время </option>
                        </select>
                        <input type="text" name="phone" placeholder="Введите время" required="required"/>
                    </div>
                    <div class="input-wrap-submit">
                        <button type="submit" class="submit-form"><span>заказать звонок</span></button>
                        <button type="submit" class="no-submit-form"><span>Отменить</span></button>
                    </div>
                </form>
            </div>
        </div>

        <div id="call_success">
            <div class="call-success">
                <div class="call_success">
                    <div class="call-title">Спасибо за заявку!</div>
                 </div>
            </div>
        </div>
    </div>
</div>