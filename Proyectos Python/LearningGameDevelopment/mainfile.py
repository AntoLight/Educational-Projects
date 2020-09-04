# %%

import sys
import pygame
pygame.init()

fullscreen_sz = width, height = pygame.display.Info(
).current_w, pygame.display.Info().current_h
speed = [1, 1]
black = pygame.Color("red")

screen = pygame.display.set_mode((0, 0))
pygame.display.set_caption("BitClicker")

# Images and Object Variables
ball = pygame.image.load("images/ball.gif")
ballrect = ball.get_rect()

while 1:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
        if event.type == pygame.KEYDOWN and pygame.key.name(event.key) == "w":
            print("Holaasd")

    # Mover la pelota

    ballrect = ballrect.move(speed)
    if ballrect.left < 0 or ballrect.right > width:
        speed[0] = -speed[0]
    if ballrect.top < 0 or ballrect.bottom > height:
        speed[1] = -speed[1]

    screen.fill(black)
    screen.blit(ball, ballrect)
    pygame.display.flip()


# %%
