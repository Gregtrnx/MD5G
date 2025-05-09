<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $recaptcha = $_POST['g-recaptcha-response'];
    $secret = '6LexhjMrAAAAAP6ShWHIoo7RbFxOLesf37LgEAU_'; // Remplace par ta clé secrète

    $errors = [];

    // Vérification du format de l'email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "L'adresse e-mail n'est pas valide.";
    }

    // Vérification côté Google
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha");
    $responseKeys = json_decode($response, true);

    if(!$responseKeys['success']) {
        $errors[] = "Veuillez valider le reCAPTCHA.";
    }

    if (empty($errors)) {
        $to = "gregoire.tournoux@email.com";
        $subject = "Nouveau message de $nom via le formulaire de contact";
        $body = "Nom: $nom\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "<p style='color:green;'>Votre message a bien été envoyé !</p>";
        } else {
            echo "<p style='color:red;'>Erreur lors de l'envoi du message.</p>";
        }
    } else {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
        echo "<p><a href='contact.html'>Retour au formulaire</a></p>";
    }
}
?>
