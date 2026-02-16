# Generative Art

Here are some generative art pieces I made using p5.js


## 1. Yin and Yang



### 1. Shape Function ($\tau$)
The distinction between the fish's smooth head and chaotic tail is defined by a piecewise function \tau(y):

$$
\tau(y) = 
\begin{cases} 
8 + 6 \sin(\lfloor y \rfloor \oplus 9) & \text{if } y < 8 \quad (\text{Head: discretized chaos}) \\
3 + \tan(y) & \text{if } y \ge 8 \quad (\text{Tail: continuous curve})
\end{cases}
$$

Where $\oplus$ denotes the bitwise XOR operation.

### 2. Dynamics ($\kappa$ and $\delta$)
The motion is driven by an auxiliary oscillator $\kappa$ and a distance metric $\delta$ defined by:

$\kappa = \tau(y) \cdot \cos(i + t/4)$ and

$\delta = \sqrt{\kappa^2 + \epsilon^2} + \cos(\epsilon + 2t + 4p)$

where $\epsilon$ is a normalized vertical shift.

### 3. Polar Projection
Finally, the screen coordinates $(x_{screen}, y_{screen})$ are derived by converting the modulated polar coordinates $(r, \theta)$ back to Cartesian space:

$$
\begin{align*}
r &= \frac{y \kappa}{5} \left( 2 + \sin(2\delta + y - 4t) \right) + R_{base} \\
\theta &= \frac{\delta}{4} - \frac{t}{2} + 3p
\end{align*}
$$

$$
\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} r \cos(\theta) + C_x \\ r \sin(\theta) + 9\delta + C_y \end{bmatrix}
$$

![yin and yang](yin_and_yang/yin_and_yang.gif)