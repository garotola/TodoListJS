const Annotations = require('../models/AnnotationData');


module.exports = {
    async read(request, response) {
        const annotations = await Annotations.find();
        return response.json(annotations);
    },

    async create(request, response) {
        const { title, notes, priority } = request.body;
        if (!title || !notes)
            return response.status(400).json({ "error": "Necessário título/anotação!" });
        const annotations = await Annotations.create({
            title,
            notes,
            priority
        });
        return response.json(annotations);
    },

    async delete(request, response) {
        const { id } = request.params;
        const annotationDeleted = await Annotations.findByIdAndDelete({ _id: id });
        if (!annotationDeleted)
            return response.status(401).json({ "error": "Anotação não encontrada!" });

        return response.json(annotationDeleted);
    }

}