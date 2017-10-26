<?php

if ($_GET['type'] == 'voyelle'){
    $lettre ="aeiouy";
} else {
    $lettre = 'bcdfghjklmnpqrstvwxz';
}

echo $lettre;

