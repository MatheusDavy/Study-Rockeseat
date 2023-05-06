const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {
        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [ ...oldEvents, cb ])
        }
        return EventEmitter.events.set(topic, [ cb ])
    },
    emit: (topic, data) => {
        const myListeners = EventEmitter.events.get(topic)
        if (Array.isArray(myListeners) && myListeners.length) {
            myListeners.forEach(event => event(data))
        }
    }
}

EventEmitter.listen('HAHA', data => console.log(`Recebendo informações do evento: ${data}`))
EventEmitter.emit('HAHA', 'Hello EventEmiiter')