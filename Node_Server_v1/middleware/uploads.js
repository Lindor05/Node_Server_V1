import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Dossier de destination pour les fichiers téléchargés
    },
    filename: function (req, file, cb) {
        cb (null, Date.now() + "-" + file.originalname); // Nom de fichier unique pour éviter les conflits
    }
});


export default multer({ storage: storage });

