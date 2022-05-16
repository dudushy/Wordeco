# Wordeco

## Steps we did
1. Start Ionic Project (Tabs Template):
    ```bash
    ionic start Wordeco tabs --cordova
    ```

1. Add Android Platform:
    ```bash
    ionic cordova platform add android
    ```

1. Generate `.apk` (Android):
    ```bash
    ionic cordova run android --aot
    ```
> For some reason there is an error running the command above

```bash
(node:9100) Warning: Accessing non-existent property 'cat' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9100) Warning: Accessing non-existent property 'cd' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'chmod' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'cp' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'dirs' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'pushd' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'popd' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'echo' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'tempdir' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'pwd' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'exec' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'ls' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'find' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'grep' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'head' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'ln' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'mkdir' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'rm' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'mv' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'sed' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'set' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'sort' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'tail' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'test' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'to' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'toEnd' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'touch' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'uniq' of module exports inside circular dependency
(node:9100) Warning: Accessing non-existent property 'which' of module exports inside circular dependency
Android Studio project detected
ANDROID_HOME=C:\Users\User\AppData\Local\Android\Sdk
JAVA_HOME=C:\Users\User\AppData\Local\Programs\Eclipse Foundation\jdk-11.0.12.7-hotspot\
Requirements check failed for JDK 1.8
[ERROR] An error occurred while running subprocess cordova.
```