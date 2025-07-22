<form id="filters">
  <input type="submit" value="search" class="btn">
  <fieldset id="startswithletter">
    <label><input type="radio" name="startswith" value="A"><span>A</span></label>
    <label><input type="radio" name="startswith" value="B"><span>B</span></label>
    <label><input type="radio" name="startswith" value="C"><span>C</span></label>
    <label><input type="radio" name="startswith" value="D"><span>D</span></label>
    <label><input type="radio" name="startswith" value="E"><span>E</span></label>
    <label><input type="radio" name="startswith" value="F"><span>F</span></label>
    <label><input type="radio" name="startswith" value="G"><span>G</span></label>
    <label><input type="radio" name="startswith" value="H"><span>H</span></label>
    <label><input type="radio" name="startswith" value="I"><span>I</span></label>
    <label><input type="radio" name="startswith" value="J"><span>J</span></label>
    <label><input type="radio" name="startswith" value="K"><span>K</span></label>
    <label><input type="radio" name="startswith" value="L"><span>L</span></label>
    <label><input type="radio" name="startswith" value="M"><span>M</span></label>
    <label><input type="radio" name="startswith" value="N"><span>N</span></label>
    <label><input type="radio" name="startswith" value="O"><span>O</span></label>
    <label><input type="radio" name="startswith" value="P"><span>P</span></label>
    <label><input type="radio" name="startswith" value="Q"><span>Q</span></label>
    <label><input type="radio" name="startswith" value="R"><span>R</span></label>
    <label><input type="radio" name="startswith" value="S"><span>S</span></label>
    <label><input type="radio" name="startswith" value="T"><span>T</span></label>
    <label><input type="radio" name="startswith" value="U"><span>U</span></label>
    <label><input type="radio" name="startswith" value="V"><span>V</span></label>
    <label><input type="radio" name="startswith" value="W"><span>W</span></label>
    <label><input type="radio" name="startswith" value="X"><span>X</span></label>
    <label><input type="radio" name="startswith" value="Y"><span>Y</span></label>
    <label><input type="radio" name="startswith" value="Z"><span>Z</span></label>
    <label><input type="radio" name="startswith" value="num"><span>#</span></label>
  </fieldset>
</form>
<?php
if (isset($_GET['startswith'])) {
  $args['starts_with'] = $_GET['startswith'];
}
?>