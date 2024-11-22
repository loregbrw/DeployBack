import dataSource from '../data-source.js';
import { Person } from '../models/Person.js';

export default class PersonController {

    static async create(req, res) {
        const { name, lastname, salary } = req.body;

        if (!name || !lastname || !salary)
            return res.status(400).send({ message: "Invalid body!" });

        try {
            const repository = dataSource.getRepository(Person);
            const person = repository.create({
                name: name,
                lastname: lastname,
                salary: salary
            });

            const createdPerson = await repository.save(person);

            return res.status(201).send({
                message: "Person created successfully!",
                body: { createdPerson }
            });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    };

    static async getAllPeople(req, res) {
        try {
            const repository = dataSource.getRepository(Person);

            const people = await repository.find();

            return res.status(200).send({
                message: "Returning all people!",
                body: { people }
            });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    };

    static async deleteById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "No id provided" });

        try {
            const repository = dataSource.getRepository(Person);
            const person = await repository.findOne({ where: { id: id } });

            if (!person)
                return res.status(404).send({ error: "Person not found!" });

            await repository.delete(id);

            return res.status(200).send({
                message: "Person deleted successfully!",
            });

        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}
