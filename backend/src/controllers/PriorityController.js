const Annotations = require("../models/AnnotationData");

module.exports = {
    async read(request, response) {
        const priority = request.query;
        const annotations = await Annotations.find(priority);
        return response.json(annotations)
    },

    async update(request, response) {
        const { id } = request.params;
        const annotation = await Annotations.findOne({ _id: id });
        annotation.priority = !annotation.priority;
        await annotation.save();
        return response.json(annotation);
    }
}