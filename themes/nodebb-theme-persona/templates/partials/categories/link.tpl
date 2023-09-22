<!-- IF ../isSection -->
{../name}
<!-- ELSE -->
<!-- IF ../link -->

<a href="{../link}" itemprop="url">
<!-- ELSE -->
{{{ if (../name == "Classes") }}}
<a href="{config.relative_path}/groups" itemprop="url">
{{{ end }}}
{{{ if (../name != "Classes") }}}
<a href="{config.relative_path}/category/{../slug}" itemprop="url">
{{{end}}}
<!-- ENDIF ../link -->
{../name}
</a>
<!-- ENDIF ../isSection -->
