import {get} from 'lodash';

const dictionary = {
    configurator: {
        FrontLeftWindow: {
            EN: 'Open front left window',
            RU: 'Открыть переднее левое окно',
        },
        FrontRightWindow: {
            EN: 'Open front right window',
            RU: 'Открыть переднее правое окно',
        },
        BackLeftWindow: {
            EN: 'Open back left window',
            RU: 'Открыть заднее левое окно',
        },
        BackRightWindow: {
            EN: 'Open back right window',
            RU: 'Открыть заднее правое окно',
        },

        FrontLeftDoor: {
            EN: 'Open front left door',
            RU: 'Открыть переднюю левую дверь',
        },
        FrontRightDoor: {
            EN: 'Open front right door',
            RU: 'Открыть переднюю правую дверь',
        },
        BackLeftDoor: {
            EN: 'Open back left door',
            RU: 'Открыть заднюю левую дверь',
        },
        BackRightDoor: {
            EN: 'Open back right door',
            RU: 'Открыть заднюю правую дверь',
        },

        FrontLeftWheelTire: {
            EN: 'Deflate front left wheel',
            RU: 'Сдуть переднее левое колесо',
        },
        FrontRightWheelTire: {
            EN: 'Deflate front right wheel',
            RU: 'Сдуть переднее правое колесо',
        },
        BackLeftWheelTire: {
            EN: 'Deflate back left wheel',
            RU: 'Сдуть заднее левое колесо',
        },
        BackRightWheelTire: {
            EN: 'Deflate back right wheel',
            RU: 'Сдуть заднее правое колесо',
        },

        Trunk: {
            EN: 'Open the trunk',
            RU: 'Открыть багажник',
        },

        SaveButton: {
            EN: 'Save',
            RU: 'Сохранить',
        },

        Title: {
            EN: 'Car state configurator',
            RU: 'Конфигуратор состояния машины'
        }
    },
    alerts: {
        car: {
            CloseSuccess: {
                EN: 'Car closed',
                RU: 'Машина закрыта',
            },
            // ClosedFailure: {
            //     EN: 'Car opened',
            //     RU: 'При закрытии машины произошла ошибка',
            // },
            OpenSuccess: {
                EN: 'Car opened',
                RU: 'Машина открыта',
            },
            // OpenFailure: {
            //     EN: 'Open front left window',
            //     RU: 'При отркытии машины произошла ошибка',
            // },

            ClimatizationOnSuccess: {
                EN: 'Climatization turned on',
                RU: 'Климат контроль включен',
            },
            // ClimatizationOnFailure: {
            //     EN: 'Open front left successfully',
            //     RU: 'Открыть переднее левое окно',
            // },

            ClimatizationOffSuccess: {
                EN: 'Climatization turned off',
                RU: 'Климат контроль выключен',
            },
            // ClimatizationOffFailure: {
            //     EN: 'Open front left window',
            //     RU: 'Открыть переднее левое окно',
            // },

            StartSuccess: {
                EN: 'Engine started',
                RU: 'Двигатель запущен',
            },
            // StartFailure: {
            //     EN: 'Open front left window',
            //     RU: 'Открыть переднее левое окно',
            // },
            StopSuccess: {
                EN: 'Engine stopped',
                RU: 'Двигатель выключен',
            },
            // StopFailure: {
            //     EN: 'Open front left window',
            //     RU: 'Открыть переднее левое окно',
            // },

            HonkSuccess: {
                EN: 'Signal played successfully\n',
                RU: 'Сигнал успешно воспроизведен',
            },
            // HonkFailure: {
            //     EN: 'Open front left window',
            //     RU: 'Открыть переднее левое окно',
            // },

            FlashSuccess: {
                EN: 'Signal played successfully\n',
                RU: 'Сигнал успешно воспроизведен',
            },
            // LightFailure: {
            //     EN: 'Open front left window',
            //     RU: 'Открыть переднее левое окно',
            // },
            StandardFailure: {
                EN: 'Error occurred',
                RU: 'Произошла ошибка'
            }
        },
    },
    voice: {
        reactions: {
            start: {
                EN: 'Engine started',
                RU: 'Двигатель запущен',
            },
            stop: {
                EN: 'Engine stopped',
                RU: 'Двигатель выключен',
            },
            open: {
                EN: 'Car opened',
                RU: 'Машина открыта',
            },
            close: {
                EN: 'Car closed',
                RU: 'Машина закрыта',
            },
            hola: {
                EN: 'how can I help you',
                RU: 'Чем я могу вам помочь'
            },
            chao: {
                EN: 'Chao',
                RU: 'Чао'
            },
            noMatch: {
                EN: 'I didn\'t understand your command could you repeat it please',
                RU: 'Я не понял вашу команду не могли бы вы повторить ее'
            }
        }
    },
}

export const getDictionaryValue = (path, lang = 'EN') => {
    return  get(dictionary, `${path}.${lang}`, null);
}