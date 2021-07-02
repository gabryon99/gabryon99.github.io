$(document).ready(function() {

    const $command = $(`#command`);
    const $content = $(`#content`);

    const textCommand = $command.text();
    $command.text('').show();

    let index = 0;
    const intervalId = setInterval(() => {

        if (textCommand == $command.text()) {
            clearInterval(intervalId);
            $content.fadeTo(100, 1);
            return;
        }

        $command.text($command.text() + textCommand[index++]);

    }, 50);

     // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

});