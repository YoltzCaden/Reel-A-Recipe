# Reel-A-Recipe — notes for Claude Code

A learn-to-code project. See `learning/project.md` for the app idea and
`learning/plan.md` for the build plan. Lessons run via `/altitude:next-lesson`.

## The `altitude` CLI is not installed on this machine

The `altitude` binary is not on this machine's PATH. Do not run `altitude ...`
commands — every one of them fails with "command not found", including
`altitude task --json` at the start of a lesson.

**Run every lesson in free mode.** The source of truth is local:

- `learning/plan.md` — the plan and locked decisions
- `learning/knowledge-graph.md` — mastery and evidence

The altitude plugin registered five hooks that all shelled out to the same
missing binary (`SessionStart`, `UserPromptSubmit`, `Stop`, `SessionEnd`, and a
`PreToolUse` on `Write|Edit`), each producing an "Executable not found in
$PATH: altitude" error. On 2026-08-05 these were disabled by emptying:

    ~/.claude/plugins/cache/altitude/altitude/0.4.0/hooks/hooks.json

The original sits beside it as `hooks.json.bak`. The plugin's skills
(`/altitude:next-lesson` and friends) are unaffected — only the hooks are off.
Reinstalling or updating the plugin will restore the failing hooks; empty the
file again if the errors come back.
