import {timer}  from "./modules/timer";
import {sertificates}  from "./modules/sertificates";
import {scroll}  from "./modules/scroll";
import modal from "./modules/modal";
import { swiper } from "./modules/swiper";
import { form } from "./modules/form";
import { validation } from "./modules/validation";
import { calculator } from "./modules/calculator";
import { burger } from "./modules/burger";
import { servicesModal } from "./modules/servicesModal";
import { tabs } from "./modules/tabs";










timer("01 october 2022");
sertificates();
scroll();
modal();
swiper();
form({formId: "form1",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});
form({formId: "form2",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});
form({formId: "callback-form",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});
form({formId: "callback-form2",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});
form({formId: "application-form",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});
form({formId: "application-form2",
    someElement: [
        {
            id: 'calc-total'

        }
    ]});


    validation();
    calculator();
    burger();
    servicesModal();
    tabs();