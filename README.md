# Potentially useful info

- In our build script, we set `--external none`, which tells Microbundle to bundle all dependencies into your final output. This is useful if you want to distribute this widget as a single, standalone file, but is generally unsuitable for library use. You want to create a secondary output if you want users to be able to import and use your widget from their own projects.
