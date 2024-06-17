import { Api, ListenerRequest } from '@lenra/app';
import { Counter } from '../classes/Counter.js';

export default async function (props: { id: string }, _event: ListenerRequest['event'], api: Api) {
    console.log("I found your secret !!")
    console.log(process.env.REALLY_SECRET);

    await api.data.coll(Counter).updateMany({ _id: props.id }, {
        $inc: {
            count: 1
        }
    });
}