> Why do I have a folder named ".expo" in my project?
> The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
  > Should I commit the ".expo" folder?
  > No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
  > Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

**Before you run**
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

**UI Palette**
| Role | Color Name | Hex Code | Usage |
| ------------------ | ------------ | --------- | --------------------------------- |
| **Background** | Soft Black | `#121212` | App background / main surfaces |
| **Primary Accent** | Emerald Green| `#10B981` | Active buttons / score highlights |
| **Secondary Text** | Cool Gray | `#A0AEC0` | Secondary text / icons |
| **Card / Border** | Dark Slate | `#2D3748` | Card edges / outlines / dividers |
| **Main Text** | Off-white | `#F7FAFC` | Primary text on dark background |
| **Hover / Press** | Graphite | `#1A202C` | Hover/pressed button backgrounds |
| **Alert / Error** | Electric Red | `#FF4D4D` | Errors / warning highlights |

**Git Commands**
Push Code:
    git add .
    git commit -m "change"
    git push -u origin main

Pull Code:
    git pull origin main

Helpful Commands:
    git status
