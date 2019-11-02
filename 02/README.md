# Challenge #2 - Something to Talk About

[Click here to learn how to navigate the code editor](https://vimeo.com/370123343)

Thanks to your tireless volunteers, the word is out that you're running for a second term, and the local media has come calling!

The Lighthouse Gazette wants to interview you about your campaign, but you're a nervous interviewer! To help prepare for your interview you want to use JavaScript to practice campaign stance on important election topics. The list of possible question categories includes:

- arts funding
- economy
- transportation

## Instructions

Given a question topic, complete a function `interviewAnswer(topic)` that returns your stance on that particular election issue. The answer should be returned as a string.

- When asked about arts funding, the function should return `"We'll have to get creative!"`
- When asked about the economy, the function should return `"Time is money."`
- When asked about transportation, the function should return `"It's going to be a long road, so we better get moving."`

If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, `"QUACK!"`)

## Examples

Input:

```javascript
const topic = 'economy'
```

Output:

```bash
Time is money.
```

Input:

```javascript
const topic = 'transportation'
```

Output:

```bash
It's going to be a long road, so we better get moving.
```
